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
  function racha() {
    const dias = leer(K_DIAS, {});
    let n = 0;
    const d = new Date();
    if (!(hoy(d) in dias)) d.setDate(d.getDate() - 1); // la racha sigue viva si hoy aún no estudiaste
    while (hoy(d) in dias) { n++; d.setDate(d.getDate() - 1); }
    return n;
  }
  function minutosHoy() { return Math.round(leer(K_DIAS, {})[hoy()] || 0); }
  function minutosTotales() { return Math.round(Object.values(leer(K_DIAS, {})).reduce((a, b) => a + b, 0)); }
  function ultimos7() {
    const dias = leer(K_DIAS, {});
    const out = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date(); d.setDate(d.getDate() - i);
      out.push({ dia: 'DLMMJVS'[d.getDay()], min: Math.round(dias[hoy(d)] || 0), hoy: i === 0 });
    }
    return out;
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

  return { marcarActividad, racha, minutosHoy, minutosTotales, ultimos7, contarTiempo,
           agregar, responder, pendientes, enRepaso, totalRepaso, dominadas };
})();
