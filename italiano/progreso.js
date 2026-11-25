// Progreso del curso de italiano: racha diaria, minutos estudiados y repaso espaciado.
// Todo se guarda en el navegador (localStorage), solo en este dispositivo.

const Progreso = (() => {
  const K_DIAS = 'it-dias';   // { "2026-11-17": minutos, ... }
  const K_SRS = 'it-srs';     // { clave: { it, es, pr, say, box, due } }
  const INTERVALOS = [0, 1, 3, 7, 14, 30, 60]; // días según la "caja"

  const leer = (k, def) => { try { return JSON.parse(localStorage.getItem(k)) || def; } catch (e) { return def; } };
  const guardar = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} };

  const hoy = (d = new Date()) => {
    const z = n => String(n).padStart(2, '0');
    return `${d.getFullYear()}-${z(d.getMonth() + 1)}-${z(d.getDate())}`;
  };
  const sumarDias = (n) => { const d = new Date(); d.setDate(d.getDate() + n); return hoy(d); };

  // ---------- Racha y minutos ----------
  function marcarActividad(min = 0) {
    const dias = leer(K_DIAS, {});
    dias[hoy()] = (dias[hoy()] || 0) + min;
    guardar(K_DIAS, dias);
  }
  // ---------- Racha con congeladores (como Duolingo) ----------
  // Si un día no estudias, se gasta un congelador y la racha no se rompe (pero ese día no suma).
  // Tienes como máximo MAX_CONG congeladores y recuperas uno cada DIAS_RECARGA días con actividad.
  const MAX_CONG = 2, DIAS_RECARGA = 7;
  const aFecha = k => { const [y, m, d] = k.split('-').map(Number); return new Date(y, m - 1, d); };
  function estadoRacha() {
    const dias = leer(K_DIAS, {});
    const fechas = Object.keys(dias).sort();
    const hoyK = hoy();
    const e = { racha: 0, mejor: 0, congeladores: MAX_CONG, max: MAX_CONG, congelados: [], hoyActivo: hoyK in dias,
                paraRecargar: 0, perdida: false };
    if (!fechas.length) return e;
    let racha = 0, cong = MAX_CONG, cuenta = 0, mejor = 0, perdida = false;
    const d = aFecha(fechas[0]);
    for (;;) {
      const k = hoy(d);
      if (k in dias) {
        racha++; cuenta++; perdida = false;
        if (cuenta >= DIAS_RECARGA) { if (cong < MAX_CONG) cong++; cuenta = 0; }
        if (racha > mejor) mejor = racha;
      } else if (k !== hoyK) {                 // hoy todavía no cuenta como día perdido
        if (racha > 0 && cong > 0) { cong--; e.congelados.push(k); }
        else if (racha > 0) { racha = 0; cuenta = 0; perdida = true; }
      }
      if (k === hoyK || k > hoyK) break;
      d.setDate(d.getDate() + 1);
    }
    return Object.assign(e, { racha, mejor, congeladores: cong, paraRecargar: cong < MAX_CONG ? DIAS_RECARGA - cuenta : 0, perdida });
  }
  function racha() { return estadoRacha().racha; }
  function minutosHoy() { return Math.round(leer(K_DIAS, {})[hoy()] || 0); }
  function minutosTotales() { return Math.round(Object.values(leer(K_DIAS, {})).reduce((a, b) => a + b, 0)); }
  function ultimos7() {
    const dias = leer(K_DIAS, {});
    const cong = new Set(estadoRacha().congelados);
    const out = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date(); d.setDate(d.getDate() - i);
      const k = hoy(d);
      out.push({ dia: 'DLMMJVS'[d.getDay()], min: Math.round(dias[k] || 0), activo: k in dias, congelado: cong.has(k), hoy: i === 0 });
    }
    return out;
  }

  // HTML del bloque de estadísticas (racha, congeladores, minutos y semana)
  function htmlStats() {
    const e = estadoRacha(), semana = ultimos7();
    const max = Math.max(10, ...semana.map(d => d.min));
    const ayer = hoy(new Date(Date.now() - 864e5));
    let aviso = '';
    if (e.congelados.includes(ayer) && !e.hoyActivo) aviso = `❄️ Ayer usaste un congelador y tu racha de <b>${e.racha}</b> sigue viva. ¡Estudia hoy para no gastar otro!`;
    else if (e.congelados.includes(ayer)) aviso = `❄️ Ayer usaste un congelador, pero ya volviste: tu racha sigue en <b>${e.racha}</b>.`;
    else if (!e.hoyActivo && e.racha > 0) aviso = `🔥 Haz una actividad hoy para que tu racha suba a <b>${e.racha + 1}</b>.`;
    else if (e.perdida) aviso = `Se te acabaron los congeladores y la racha volvió a 0. ¡Empieza una nueva hoy!`;
    return `
      <div class="stat"><b>🔥 ${e.racha}</b><span>días de racha</span></div>
      <div class="stat" title="Recuperas 1 congelador cada ${DIAS_RECARGA} días con actividad"><b>${'❄️'.repeat(e.congeladores) || '—'}</b><span>${e.congeladores}/${e.max} congeladores${e.paraRecargar ? ` · +1 en ${e.paraRecargar} días` : ''}</span></div>
      <div class="stat"><b>⏱️ ${minutosHoy()}</b><span>min hoy · ${minutosTotales()} en total</span></div>
      <div class="week">${semana.map(d => `<div class="day ${d.hoy ? 'today' : ''}" title="${d.congelado ? 'Día congelado' : d.min + ' min'}">
        ${d.congelado ? '<em>❄️</em>' : `<i style="height:${Math.max(4, d.min / max * 100)}%; opacity:${d.activo ? 1 : .25}"></i>`}<small>${d.dia}</small></div>`).join('')}</div>
      ${aviso ? `<div class="streak-msg">${aviso}</div>` : ''}
      <div class="streak-best">Mejor racha: ${e.mejor} días · Si un día no estudias se usa un congelador ❄️ y la racha no se rompe.</div>`;
  }

  // Cuenta el tiempo mientras la página está visible y la persona interactuó en los últimos 2 minutos.
  function contarTiempo() {
    let ultimaAccion = Date.now();
    ['click', 'keydown', 'scroll', 'touchstart'].forEach(ev =>
      addEventListener(ev, () => { ultimaAccion = Date.now(); }, { passive: true }));
    setInterval(() => {
      if (document.visibilityState === 'visible' && Date.now() - ultimaAccion < 120000) marcarActividad(0.25);
    }, 15000);
  }

  // ---------- Repaso espaciado ----------
  const clave = (it) => it.trim().toLowerCase();
  function agregar(item) { // item: { it, es, pr, say }
    const srs = leer(K_SRS, {});
    const k = clave(item.it);
    if (!srs[k]) { srs[k] = { ...item, box: 0, due: hoy() }; guardar(K_SRS, srs); }
  }
  function responder(item, sabia) {
    const srs = leer(K_SRS, {});
    const k = clave(item.it);
    const c = srs[k] || { ...item, box: 0 };
    c.box = sabia ? Math.min(c.box + 1, INTERVALOS.length - 1) : 0;
    c.due = sumarDias(sabia ? INTERVALOS[c.box] : 0);
    srs[k] = c;
    guardar(K_SRS, srs);
    marcarActividad(0);
  }
  function pendientes() {
    const srs = leer(K_SRS, {}), h = hoy();
    return Object.values(srs).filter(c => c.due <= h);
  }
  function enRepaso(it) { return !!leer(K_SRS, {})[clave(it)]; }
  function totalRepaso() { return Object.keys(leer(K_SRS, {})).length; }
  function dominadas() { return Object.values(leer(K_SRS, {})).filter(c => c.box >= 4).length; }

  return { estadoRacha, htmlStats, marcarActividad, racha, minutosHoy, minutosTotales, ultimos7, contarTiempo,
           agregar, responder, pendientes, enRepaso, totalRepaso, dominadas };
})();
