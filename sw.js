// Service worker: guarda la app para que funcione sin internet.
// Estrategia: muestra lo guardado al instante y, en segundo plano, descarga la versión nueva
// para la próxima vez. Si agregas páginas nuevas, añádelas a ARCHIVOS y sube VERSION.
const VERSION = 'v2';
const CACHE = 'idiomas-' + VERSION;
const ARCHIVOS = [
  './',
  './index.html',
  './ingles.html',
  './styles.css',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './a1/menu.html',
  './a1/clase1_saludos.html',
  './a1/practica1.html',
  './italiano/index.html',
  './italiano/lezione.html',
  './italiano/lezioni.js',
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
    const guardado = await cache.match(clave, { ignoreSearch: propio });
    const red = fetch(req).then(res => {
      if (res && (res.ok || res.type === 'opaque')) {
        cache.put(clave, res.clone());
      }
      return res;
    }).catch(() => guardado || (req.mode === 'navigate' ? cache.match('./index.html') : Response.error()));
    return guardado || red;
  }));
});
