// Datos generales del sitio. Todo lo que se repite en varias páginas vive aquí.

export const site = {
  name: 'Leo Eyzaguirre',
  fullName: 'Leonardo Eyzaguirre Rojas',
  role: 'Psicólogo y psicoterapeuta conductual-contextual',
  roleShort: 'Psicoterapeuta Conductual-Contextual',
  // Título de la portada en Google y al compartir: lo que la gente busca, no la jerga.
  homeTitle: 'Psicólogo en La Paz y online · Ansiedad, depresión y duelo',
  description:
    'Psicólogo en La Paz: terapia para ansiedad, depresión, falta de sentido, duelo y rupturas de pareja, con terapias contextuales basadas en evidencia. Presencial en La Paz y online.',
  locale: 'es-BO',

  // Año en que empezó la atención clínica. Los «años de experiencia» se calculan solos a partir de aquí.
  clinicalSince: 2017,

  // WhatsApp: solo dígitos, con código de país y sin el signo +.
  whatsapp: '59165677086',
  whatsappDisplay: '+591 65677086',

  email: 'leo.eyzaguirrer@gmail.com',
  instagram: [
    { handle: '@leo.eyzaguirre', url: 'https://www.instagram.com/leo.eyzaguirre/' },  ],
  address: {
    short: 'Irpavi, Calle 16, La Paz – Bolivia',
    full: 'Calle Final Irpavi, Edificio «Palmeras», La Paz',
    city: 'La Paz',
    country: 'BO',
  },
} as const;

/** Años de experiencia clínica, calculados al construir el sitio. */
export const yearsOfPractice = new Date().getFullYear() - site.clinicalSince;

/** Orden lineal de las secciones (lo usan los enlaces «Anterior / Siguiente»). */
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

/** Menú principal agrupado: pocas opciones arriba y el detalle en desplegables. */
export interface MenuLink {
  href: string;
  label: string;
  desc?: string;
}
export interface MenuGroup {
  label: string;
  items: MenuLink[];
}
export const menu: (MenuLink | MenuGroup)[] = [
  { href: '/', label: 'Inicio' },
  {
    label: 'Sobre mí',
    items: [
      { href: '/quien-soy', label: 'Quién soy', desc: 'Mi presentación y la base de mi trabajo' },
      { href: '/hoja-de-vida', label: 'Hoja de vida', desc: 'Formación, experiencia clínica y docencia' },
      { href: '/profesionales', label: 'Para profesionales', desc: 'Supervisión y formación para terapeutas' },
    ],
  },
  {
    label: 'Terapia',
    items: [
      { href: '/terapia-ansiedad', label: 'Terapia para la ansiedad', desc: 'Preocupación, pánico y ansiedad social' },
      { href: '/terapia-depresion', label: 'Depresión y sentido de vida', desc: 'Desánimo, vacío y falta de rumbo' },
      { href: '/terapia-duelo', label: 'Duelo y rupturas de pareja', desc: 'Muerte de un ser querido, separación o divorcio' },
      { href: '/como-trabajo', label: 'Cómo trabajo', desc: 'Análisis funcional y flexibilidad psicológica' },
      { href: '/enfoques', label: 'Enfoques', desc: 'ACT, FAP, Activación Conductual y DBT' },
      { href: '/proceso', label: 'El proceso', desc: 'Paso a paso, presencial u online' },
    ],
  },
  {
    label: 'Consulta',
    items: [
      { href: '/tarifas', label: 'Tarifas', desc: 'Precios por sesión y paquetes' },
      { href: '/preguntas-frecuentes', label: 'Preguntas frecuentes', desc: 'Primera sesión, pagos y confidencialidad' },
      { href: '/contacto', label: 'Contacto', desc: 'WhatsApp, correo y consultorio' },
    ],
  },
  {
    label: 'Recursos',
    items: [
      { href: '/recursos', label: 'Recursos', desc: 'Materiales para consultantes y clínicos' },
      { href: '/blog', label: 'Blog', desc: 'Artículos de psicología contextual' },
    ],
  },
];

export const footerNav = [
  { href: '/quien-soy', label: 'Quién soy' },
  { href: '/terapia-ansiedad', label: 'Terapia para la ansiedad' },
  { href: '/terapia-depresion', label: 'Depresión y sentido de vida' },
  { href: '/terapia-duelo', label: 'Duelo y rupturas de pareja' },
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
  noSe: 'Hola Leo, quisiera consultarte por algo que no vi en la lista de tu página.',} as const;
