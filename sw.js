// Service worker: guarda la app para que funcione sin internet.
// Estrategia: con internet, siempre descarga la versión más nueva (y la guarda);
// sin internet, usa la copia guardada. Las fuentes de Google se sirven desde la copia.
// Si agregas páginas nuevas, añádelas a ARCHIVOS y sube VERSION.
const VERSION = 'v13';
const CACHE = 'idiomas-' + VERSION;
const ARCHIVOS = [
  './',
  './index.html',
  './ingles.html',
  './palabras.html',
  './palabras.js',
  './guia-ingles.html',
  './styles.css',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './a1/menu.html',
  './a1/clase1_saludos.html',
  './a1/practica1.html',
  './a1/clase.html',
  './a1/clases.js',
  './a1/extra.js',
  './a2/menu.html',
  './a2/clases.js',
  './italiano/index.html',
  './italiano/lezione.html',
  './italiano/lezioni.js',
  './italiano/metodo.js',
  './italiano/guia.html',
  './italiano/parolacce.html',
  './italiano/letture.html',
  './italiano/letture.js',
  './italiano/coniuga.html',
  './italiano/verbi.js',
  './italiano/parole.html',
  './italiano/parole.js',
  './italiano/progreso.js',
  './italiano/repaso.html',
  './italiano/esame.html',
  './italiano/italiano.css'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ARCHIVOS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k.startsWith('idiomas-') && k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const propio = url.origin === location.origin;
  const fuentes = url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com';
  if (!propio && !fuentes) return;

  e.respondWith(caches.open(CACHE).then(async cache => {
    // Una carpeta (".../italiano/") es lo mismo que su index.html.
    // ignoreSearch: lezione.html?n=3 usa la misma página guardada que lezione.html
    const ruta = url.pathname.endsWith('/') ? url.pathname + 'index.html' : url.pathname;
    const clave = propio ? url.origin + ruta : req;
    const guardado = () => cache.match(clave, { ignoreSearch: propio });

    if (fuentes) {
      // Las fuentes no cambian: primero la copia, si no existe se descarga.
      const g = await guardado();
      if (g) return g;
    }

    try {
      // 'no-cache' obliga a preguntar al servidor si hay algo nuevo (no usa la caché del navegador)
      const res = await fetch(req, propio ? { cache: 'no-cache' } : undefined);
      if (res && (res.ok || res.type === 'opaque')) cache.put(clave, res.clone());
      return res;
    } catch (err) {
      return (await guardado()) ||
        (req.mode === 'navigate' ? await cache.match('./index.html') : Response.error());
    }
  }));
});
