// Datos generales del sitio. Todo lo que se repite en varias páginas vive aquí.

export const site = {
  name: 'Leo Eyzaguirre',
  fullName: 'Leonardo Eyzaguirre Rojas',
  role: 'Psicólogo y psicoterapeuta conductual-contextual',
  roleShort: 'Psicoterapeuta Conductual-Contextual',
  description:
    'Psicoterapia conductual-contextual basada en evidencia. Atención presencial en La Paz, Bolivia, y online en Bolivia y el exterior.',
  locale: 'es-BO',

  // WhatsApp: solo dígitos, con código de país y sin el signo +.
  whatsapp: '59165677086',
  whatsappDisplay: '+591 65677086',

  email: 'leo.eyzaguirrer@gmail.com',
  instagram: [
    { handle: '@leo.eyzaguirre', url: 'https://www.instagram.com/leo.eyzaguirre/' },
    { handle: '@espacio.contextual.bo', url: 'https://www.instagram.com/espacio.contextual.bo/' },
  ],
  address: {
    short: 'Irpavi, Calle 16, La Paz – Bolivia',
    full: 'Calle Final Irpavi, Edificio «Palmeras», La Paz',
    city: 'La Paz',
    country: 'BO',
  },
} as const;

export const nav = [
  { href: '/', label: 'Inicio' },
  { href: '/quien-soy', label: 'Quién soy' },
  { href: '/como-trabajo', label: 'Cómo trabajo' },
  { href: '/enfoques', label: 'Enfoques' },
  { href: '/proceso', label: 'Proceso' },
  { href: '/tarifas', label: 'Tarifas' },
  { href: '/hoja-de-vida', label: 'Hoja de vida' },
  { href: '/preguntas-frecuentes', label: 'Preguntas' },
  { href: '/recursos', label: 'Recursos' },
  { href: '/contacto', label: 'Contacto' },
] as const;

export const footerNav = [
  { href: '/quien-soy', label: 'Quién soy' },
  { href: '/como-trabajo', label: 'Cómo trabajo' },
  { href: '/enfoques', label: 'Enfoques' },
  { href: '/proceso', label: 'El proceso' },
  { href: '/tarifas', label: 'Tarifas' },
  { href: '/hoja-de-vida', label: 'Hoja de vida' },
  { href: '/profesionales', label: 'Para profesionales' },
  { href: '/blog', label: 'Blog' },
  { href: '/recursos', label: 'Recursos' },
  { href: '/preguntas-frecuentes', label: 'Preguntas frecuentes' },
  { href: '/contacto', label: 'Contacto' },
  { href: '/privacidad', label: 'Privacidad' },
] as const;

/** Enlace a WhatsApp con un mensaje prellenado. Toda la agenda pasa por aquí. */
export function whatsappUrl(message = 'Hola Leo, vi tu página y quisiera más información.') {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const waMessages = {
  general: 'Hola Leo, vi tu página y quisiera más información.',
  agendar: 'Hola Leo, quisiera agendar una primera sesión.',
  presencial: 'Hola Leo, quisiera agendar una sesión presencial en La Paz.',
  online: 'Hola Leo, quisiera agendar una sesión online.',
  tarifasBolivia: 'Hola Leo, vi tus tarifas y quisiera agendar una sesión (estoy en Bolivia).',
  tarifasExterior: 'Hola Leo, vi tus tarifas y quisiera agendar una sesión online (estoy fuera de Bolivia).',
  profesionales: 'Hola Leo, soy profesional de la psicología y quisiera información sobre supervisión o formación.',
  blog: 'Hola Leo, leí tu blog y quisiera hacerte una consulta.',
} as const;
