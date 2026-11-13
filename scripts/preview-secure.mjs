// Sirve la carpeta dist/ con las mismas cabeceras de seguridad de vercel.json,
// para probar en local que la política (CSP) no bloquea nada.
// Uso: npm run build && node scripts/preview-secure.mjs
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve('dist');
const port = Number(process.env.PORT) || 4322;
const vercel = JSON.parse(fs.readFileSync('vercel.json', 'utf8'));
const securityHeaders = vercel.headers[0].headers.filter(
  // HSTS y upgrade-insecure-requests solo tienen sentido con HTTPS.
  (h) => h.key !== 'Strict-Transport-Security',
);
const types = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp',
  '.woff2': 'font/woff2', '.xml': 'application/xml; charset=utf-8', '.txt': 'text/plain; charset=utf-8',
};

http
  .createServer((req, res) => {
    const url = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    const candidates = [url, url + '.html', path.join(url, 'index.html')];
    let file = candidates.map((c) => path.join(root, c)).find((f) => f.startsWith(root) && fs.existsSync(f) && fs.statSync(f).isFile());
    let status = 200;
    if (!file) { file = path.join(root, '404.html'); status = 404; }
    for (const h of securityHeaders) {
      res.setHeader(h.key, h.key === 'Content-Security-Policy' ? h.value.replace('; upgrade-insecure-requests', '') : h.value);
    }
    res.writeHead(status, { 'Content-Type': types[path.extname(file)] || 'application/octet-stream' });
    fs.createReadStream(file).pipe(res);
  })
  .listen(port, () => console.log(`Vista previa segura en http://localhost:${port}`));
