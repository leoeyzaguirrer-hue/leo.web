# Web de Leo Eyzaguirre

Sitio estático hecho con [Astro](https://astro.build), pensado para desplegarse en Vercel.

## Comandos

```bash
npm install        # una sola vez
npm run dev        # trabajar en local → http://localhost:4321
npm run build      # genera el sitio en dist/
npm run seguro     # sirve dist/ con las cabeceras de seguridad reales → http://localhost:4322
```

## Dónde cambiar cada cosa

| Qué | Archivo |
|---|---|
| WhatsApp, Instagram, correo, dirección, menú | `src/config/site.ts` |
| Mensajes prellenados de WhatsApp | `src/config/site.ts` (`waMessages`) |
| Textos de Quién soy, Cómo trabajo, Enfoques y Proceso | `src/data/servicios.ts` |
| Precios | `src/data/tarifas.ts` |
| Hoja de vida | `src/data/cv.ts` |
| Preguntas frecuentes | `src/data/faq.ts` |
| Colores, tipografías, animaciones | `src/styles/global.css` (variables en `:root`) |
| Cabeceras de seguridad | `vercel.json` |

## Publicar un artículo del blog

Crea un archivo `.md` en `src/content/blog/`. El nombre del archivo será la dirección
(`mi-articulo.md` → `/blog/mi-articulo`). Empieza con este encabezado:

```md
---
title: Título del artículo
description: Resumen de una o dos líneas.
pubDate: 2026-12-01
tags: [ACT, Ansiedad]
draft: false
---

Aquí va el texto, en Markdown.
```

Se puede crear directamente desde GitHub (Add file → Create new file); Vercel publica solo al guardar.
Con `draft: true` el artículo no se publica.

## Dominio propio

La URL del sitio se define en un solo lugar: la variable `SITE_URL` (en Vercel → Settings →
Environment Variables) o el valor por defecto de `astro.config.mjs`. Al comprar el dominio,
conéctalo en Vercel y actualiza esa variable.

## Seguridad

- Sitio 100 % estático: sin base de datos, sin login, sin formularios.
- Política CSP estricta (`vercel.json`): solo se cargan scripts, estilos, fuentes e imágenes del propio sitio.
  Por eso no hay estilos ni scripts en línea; si agregas un servicio externo (analítica, mapas, videos),
  hay que autorizarlo en la CSP.
- HSTS, anti-clickjacking, `nosniff`, `Referrer-Policy` y `Permissions-Policy` activados.
