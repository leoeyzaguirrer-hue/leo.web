import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// La URL pública vive en un solo lugar. Al comprar el dominio:
// define SITE_URL en Vercel (Settings → Environment Variables) o cambia el valor por defecto.
const site = process.env.SITE_URL || 'https://leoweb-phi.vercel.app';

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'never',
  integrations: [sitemap()],
  build: {
    format: 'file',
    // Nada de CSS en línea: permite una política de seguridad (CSP) estricta.
    inlineStylesheets: 'never',
  },
  markdown: {
    // El resaltado de código usa estilos en línea, incompatibles con la CSP.
    syntaxHighlight: false,
  },
});
