// Motor de conjugación para la práctica de verbos.
// Regulares: se conjugan por reglas. Irregulares: tablas o raíces especiales.
// Personas: 0 io, 1 tu, 2 lui/lei, 3 noi, 4 voi, 5 loro

const VERBI = [
  // [infinitivo, español, opciones]
  ["parlare", "hablar"], ["mangiare", "comer"], ["lavorare", "trabajar"], ["studiare", "estudiar"],
  ["cercare", "buscar"], ["pagare", "pagar"], ["comprare", "comprar"], ["abitare", "vivir (residir)"],
  ["ascoltare", "escuchar"], ["cominciare", "empezar"], ["arrivare", "llegar", { aux: "essere" }],
  ["tornare", "volver", { aux: "essere" }], ["entrare", "entrar", { aux: "essere" }],
  ["prendere", "tomar", { pp: "preso" }], ["leggere", "leer", { pp: "letto" }], ["scrivere", "escribir", { pp: "scritto" }],
  ["vedere", "ver", { pp: "visto", fut: "vedr" }], ["vivere", "vivir", { pp: "vissuto", fut: "vivr" }],
  ["mettere", "poner", { pp: "messo" }], ["chiedere", "preguntar / pedir", { pp: "chiesto" }],
  ["rispondere", "responder", { pp: "risposto" }], ["credere", "creer"], ["perdere", "perder", { pp: "perso" }],
  ["dormire", "dormir"], ["partire", "partir / salir de viaje", { aux: "essere" }], ["aprire", "abrir", { pp: "aperto" }],
  ["sentire", "sentir / oír"], ["capire", "entender", { isc: true }], ["finire", "terminar", { isc: true }],
  ["preferire", "preferir", { isc: true }],
  // Irregulares
  ["essere", "ser / estar", { irr: true, aux: "essere", pp: "stato", fut: "sar",
    pres: ["sono", "sei", "è", "siamo", "siete", "sono"], imp: ["ero", "eri", "era", "eravamo", "eravate", "erano"] }],
  ["avere", "tener / haber", { irr: true, pp: "avuto", fut: "avr", pres: ["ho", "hai", "ha", "abbiamo", "avete", "hanno"] }],
  ["fare", "hacer", { irr: true, pp: "fatto", fut: "far", impStem: "face", pres: ["faccio", "fai", "fa", "facciamo", "fate", "fanno"] }],
  ["andare", "ir", { irr: true, aux: "essere", fut: "andr", pres: ["vado", "vai", "va", "andiamo", "andate", "vanno"] }],
  ["venire", "venir", { irr: true, aux: "essere", pp: "venuto", fut: "verr", pres: ["vengo", "vieni", "viene", "veniamo", "venite", "vengono"] }],
  ["stare", "estar / quedarse", { irr: true, aux: "essere", fut: "star", pres: ["sto", "stai", "sta", "stiamo", "state", "stanno"] }],
  ["dire", "decir", { irr: true, pp: "detto", fut: "dir", impStem: "dice", pres: ["dico", "dici", "dice", "diciamo", "dite", "dicono"] }],
  ["volere", "querer", { irr: true, fut: "vorr", pres: ["voglio", "vuoi", "vuole", "vogliamo", "volete", "vogliono"] }],
  ["potere", "poder", { irr: true, fut: "potr", pres: ["posso", "puoi", "può", "possiamo", "potete", "possono"] }],
  ["dovere", "deber / tener que", { irr: true, fut: "dovr", pres: ["devo", "devi", "deve", "dobbiamo", "dovete", "devono"] }],
  ["sapere", "saber", { irr: true, fut: "sapr", pres: ["so", "sai", "sa", "sappiamo", "sapete", "sanno"] }],
  ["uscire", "salir", { irr: true, aux: "essere", pres: ["esco", "esci", "esce", "usciamo", "uscite", "escono"] }],
  ["bere", "beber", { irr: true, pp: "bevuto", fut: "berr", impStem: "beve", pres: ["bevo", "bevi", "beve", "beviamo", "bevete", "bevono"] }],
  ["dare", "dar", { irr: true, fut: "dar", pres: ["do", "dai", "dà", "diamo", "date", "danno"] }],
  ["rimanere", "quedarse", { irr: true, aux: "essere", pp: "rimasto", fut: "rimarr", pres: ["rimango", "rimani", "rimane", "rimaniamo", "rimanete", "rimangono"] }]
];

const PERSONE = ["io", "tu", "lui / lei", "noi", "voi", "loro"];
const TEMPI = {
  presente: "Presente",
  passato: "Passato prossimo",
  imperfetto: "Imperfetto",
  futuro: "Futuro",
  condizionale: "Condizionale"
};

function infoVerbo(inf) {
  const v = VERBI.find(x => x[0] === inf);
  return { inf: v[0], es: v[1], ...(v[2] || {}) };
}

function presente(V) {
  if (V.pres) return V.pres.slice();
  const inf = V.inf, tipo = inf.slice(-3), r = inf.slice(0, -3);
  if (tipo === 'are') {
    const h = /[cg]$/.test(r) ? 'h' : '';         // cercare → cerchi, pagare → paghi
    const sinI = /i$/.test(r);                    // mangiare → mangi (no mangii)
    const t = sinI ? r.slice(0, -1) : r;
    return [r + 'o', t + h + 'i', r + 'a', t + h + 'iamo', r + 'ate', r + 'ano'];
  }
  if (tipo === 'ere') return [r + 'o', r + 'i', r + 'e', r + 'iamo', r + 'ete', r + 'ono'];
  if (V.isc) return [r + 'isco', r + 'isci', r + 'isce', r + 'iamo', r + 'ite', r + 'iscono'];
  return [r + 'o', r + 'i', r + 'e', r + 'iamo', r + 'ite', r + 'ono'];
}

function imperfetto(V) {
  if (V.imp) return V.imp.slice();
  const s = V.impStem || V.inf.slice(0, -2);    // parla-, prende-, dormi-
  return ['vo', 'vi', 'va', 'vamo', 'vate', 'vano'].map(e => s + e);
}

function raizFuturo(V) {
  if (V.fut) return V.fut;
  const inf = V.inf, tipo = inf.slice(-3), r = inf.slice(0, -3);
  if (tipo === 'are') {
    if (/[cg]i$/.test(r)) return r.slice(0, -1) + 'er';     // mangiare → manger, cominciare → comincer
    if (/[cg]$/.test(r)) return r + 'her';                   // cercare → cercher
    return r + 'er';
  }
  return inf.slice(0, -1);                                   // prender, dormir
}
const futuro = V => ['ò', 'ai', 'à', 'emo', 'ete', 'anno'].map(e => raizFuturo(V) + e);
const condizionale = V => ['ei', 'esti', 'ebbe', 'emmo', 'este', 'ebbero'].map(e => raizFuturo(V) + e);

function participio(V) {
  if (V.pp) return V.pp;
  const inf = V.inf, tipo = inf.slice(-3), r = inf.slice(0, -3);
  return r + (tipo === 'are' ? 'ato' : tipo === 'ere' ? 'uto' : 'ito');
}
function passato(V) {
  const pp = participio(V);
  if (V.aux === 'essere') {
    const aux = ['sono', 'sei', 'è', 'siamo', 'siete', 'sono'];
    const base = pp.slice(0, -1);
    return aux.map((a, i) => `${a} ${base}${i < 3 ? 'o' : 'i'}`);
  }
  const aux = ['ho', 'hai', 'ha', 'abbiamo', 'avete', 'hanno'];
  return aux.map(a => `${a} ${pp}`);
}

function coniuga(inf, tempo) {
  const V = infoVerbo(inf);
  return { presente, passato, imperfetto, futuro, condizionale }[tempo](V);
}

// Respuestas válidas: con essere se acepta también el femenino (andata, andate).
function risposteValide(inf, tempo, p) {
  const f = coniuga(inf, tempo)[p];
  const out = [f];
  if (tempo === 'passato' && infoVerbo(inf).aux === 'essere') out.push(f.replace(/o$/, 'a').replace(/i$/, 'e'));
  return out;
}

// ---- Datos extra para la vista "Ver verbos" ----
function gerundio(inf) {
  const irr = { fare: 'facendo', dire: 'dicendo', bere: 'bevendo' };
  if (irr[inf]) return irr[inf];
  return inf.slice(0, -3) + (inf.endsWith('are') ? 'ando' : 'endo');
}
function tipoVerbo(inf) {
  const V = infoVerbo(inf);
  if (V.irr) return 'irr';
  return inf.slice(-3);                // 'are' | 'ere' | 'ire'
}
function notaVerbo(inf) {
  const V = infoVerbo(inf), notas = [];
  if (V.irr) notas.push('Verbo irregular: el presente no sigue las reglas, apréndelo de memoria.');
  else if (V.isc) notas.push(`Verbo en -ire con <b>-isc-</b>: lo añade en io, tu, lui/lei y loro (<b>${coniuga(inf, 'presente')[0]}, ${coniuga(inf, 'presente')[1]}</b>…), pero no en noi y voi.`);
  else if (/[cg]are$/.test(inf)) notas.push('Añade una <b>h</b> antes de i / e para mantener el sonido duro: tu <b>cerchi</b>, noi <b>cerchiamo</b>, io <b>cercherò</b>.'.replace(/cerch/g, inf.slice(0, -3) + 'h'));
  else if (/[cg]iare$/.test(inf)) notas.push(`Pierde la <b>i</b> antes de otra i o de e: tu <b>${coniuga(inf, 'presente')[1]}</b>, io <b>${coniuga(inf, 'futuro')[0]}</b>.`);
  else if (/iare$/.test(inf)) notas.push(`Una sola i en tu y noi: tu <b>${coniuga(inf, 'presente')[1]}</b>, noi <b>${coniuga(inf, 'presente')[3]}</b>.`);
  else notas.push(`Regular: sigue el modelo de <b>${{ are: 'parlare', ere: 'prendere', ire: 'dormire' }[inf.slice(-3)]}</b>.`);
  if (V.pp && !V.irr) notas.push(`Participio irregular: <b>${V.pp}</b>.`);
  if (V.fut && !V.irr) notas.push(`Futuro y condicional con raíz corta: <b>${V.fut}ò</b>, <b>${V.fut}ei</b>.`);
  if (V.aux === 'essere') { const b = participio(V).slice(0, -1); notas.push(`En pasado usa <b>essere</b> y el participio concuerda: ${b}o / ${b}a / ${b}i / ${b}e.`); }
  return notas;
}
