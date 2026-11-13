// Genera el favicon y la imagen para compartir (Open Graph) a partir del logo.
// Uso: node scripts/make-brand-assets.mjs   (solo hace falta si cambia el logo)
import sharp from 'sharp';

const logo = 'src/assets/logo.png';
const meta = await sharp(logo).metadata();

// El isotipo (hexágonos) ocupa la parte izquierda del logo.
const markWidth = Math.round(meta.width * 0.535);
const mark = await sharp(logo).extract({ left: 0, top: 0, width: markWidth, height: meta.height }).png().toBuffer();

async function icon(size, file) {
  const inner = Math.round(size * 0.86);
  const resized = await sharp(mark).resize(inner, inner, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).toBuffer();
  await sharp({ create: { width: size, height: size, channels: 4, background: { r: 255, g: 255, b: 255, alpha: file.includes('apple') ? 1 : 0 } } })
    .composite([{ input: resized, gravity: 'centre' }])
    .png()
    .toFile(file);
}
await icon(96, 'public/favicon.png');
await icon(180, 'public/apple-touch-icon.png');

// Imagen 1200×630 para vistas previas en WhatsApp, Instagram, etc.
const card = Buffer.from(
  `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
    <defs><pattern id="h" width="140" height="160" patternUnits="userSpaceOnUse">
      <path d="M70 17 126 49v62L70 143 14 111V49Z" fill="#044C94" stroke="#044C94" stroke-width="8" stroke-linejoin="round"/>
    </pattern></defs>
    <rect width="1200" height="630" fill="#0553A0"/>
    <rect width="1200" height="630" fill="url(#h)"/>
    <rect x="170" y="125" width="860" height="380" rx="48" fill="#FFFFFF"/>
    <rect y="618" width="600" height="12" fill="#00365F"/>
    <rect x="600" y="618" width="360" height="12" fill="#0D53A0"/>
    <rect x="960" y="618" width="240" height="12" fill="#FCBF14"/>
  </svg>`,
);
const logoForCard = await sharp(logo).resize({ width: 700 }).toBuffer();
await sharp(card).composite([{ input: logoForCard, gravity: 'centre' }]).png({ compressionLevel: 9 }).toFile('public/og.png');

console.log('Listo: public/favicon.png, public/apple-touch-icon.png, public/og.png');
