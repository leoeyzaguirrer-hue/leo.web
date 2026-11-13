// Hoja de vida (página /hoja-de-vida).
// Nota: el documento original incluye CI y fecha de nacimiento; no se publican en la web a propósito.

export interface Item {
  fecha?: string;
  titulo: string;
  lugar: string;
}

export const perfil = [
  'Psicoterapeuta conductual-contextual con formación especializada en ACT, DBT, FAP y Terapia Conductual Basada en Procesos. Integro la práctica clínica con la docencia universitaria, la supervisión y la formación de terapeutas en Bolivia y Latinoamérica.',
  'Soñador y pensador, me motivan los desafíos, el diseño de estrategias y la resolución de problemas. Apasionado por el conductismo y la terapia basada en evidencia, con una marcada preferencia por el estudio autodidacta y el deseo constante de mejorar. Fuera de la consulta, disfruto la lectura, la cocina y el deporte.',
];

export const enfoquesCv = ['ACT', 'DBT', 'FAP', 'PBBT', 'IBT', 'Teoría de los Marcos Relacionales', 'Análisis funcional'];

export const idiomas = [
  { idioma: 'Español', nivel: 'Nativo' },
  { idioma: 'Inglés', nivel: 'Intermedio' },
];

export const formacionAcademica: Item[] = [
  {
    fecha: '2023 – 2024',
    titulo: 'Máster en Análisis Funcional del Comportamiento',
    lugar: 'Sociedad para el Avance del Estudio Científico del Comportamiento (SAVECC)',
  },
  {
    fecha: '2021 – 2023',
    titulo: 'Diplomado en Terapias Conductuales Contextuales',
    lugar:
      'Fundación CIPCO · Especialización en Terapia Dialéctico Conductual (DBT), Terapia de Aceptación y Compromiso (ACT), Psicoterapia Analítico Funcional (FAP) y psicoterapias contemporáneas IBT y PBBT',
  },
  { fecha: '2018', titulo: 'Diplomado en Educación Superior', lugar: 'Universidad Católica Boliviana «San Pablo»' },
  {
    fecha: 'Febrero – diciembre 2017',
    titulo: 'Especialidad en Psicología Clínica Sistémica y Terapias Breves',
    lugar: 'Universidad Católica Boliviana «San Pablo»',
  },
  { fecha: '2009 – 2016', titulo: 'Licenciatura en Psicología', lugar: 'Universidad Católica Boliviana «San Pablo»' },
  { fecha: '2008', titulo: 'Bachiller en Humanidades', lugar: 'Colegio Amor de Dios, La Paz' },
];

export const practicaClinica: Item[] = [
  {
    fecha: '2017 – 2022',
    titulo: 'Psicólogo clínico y supervisor académico',
    lugar: 'Consultorio Psicológico · Universidad Católica Boliviana «San Pablo»',
  },
  { fecha: '2017 – 2018', titulo: 'Coordinador general psicológico', lugar: 'Universidad Católica Boliviana «San Pablo»' },
  {
    fecha: 'Julio – agosto 2020',
    titulo: 'Psicólogo clínico · Atención terapéutica para contención emocional',
    lugar: 'Empresa Etika',
  },
  { fecha: '2019 – 2020', titulo: 'Psicólogo clínico · Atención terapéutica', lugar: 'Aldeas Infantiles S.O.S.' },
  {
    // PENDIENTE: en el diseño original esta fecha figura como «[FECHA]». Complétala aquí.
    titulo: 'Psicólogo clínico · Pabellón de Oncología',
    lugar: 'Hospital de Clínicas · Gobierno Municipal de La Paz',
  },
  {
    fecha: 'Agosto – diciembre 2014',
    titulo: 'Psicólogo · Plataforma de Atención Inmediata al Adulto Mayor (PAIAM)',
    lugar: 'Gobierno Municipal de La Paz',
  },
];

export const docencia: Item[] = [
  {
    fecha: '2025 – actualidad',
    titulo: 'Docente de Teoría de los Marcos Relacionales · Máster en Terapias Contextuales y de Tercera Generación',
    lugar: 'ITACA Formaciones',
  },
  {
    fecha: '2025',
    titulo: 'Docente · Maestría en Terapias Cognitivo Conductuales y Contextuales',
    lugar: 'Universidad Autónoma Gabriel René Moreno · Santa Cruz',
  },
  {
    fecha: '2023 – actualidad',
    titulo: 'Docente · Diplomado en Herramientas Cognitivo Conductuales para la Intervención',
    lugar: 'Universidad Católica Boliviana «San Pablo» · Cochabamba',
  },
  {
    fecha: '2021',
    titulo: 'Docente · Diplomado en Psicoterapia Clínica Sistémica',
    lugar: 'Universidad Católica Boliviana «San Pablo»',
  },
];

export const cursos: { titulo: string; lugar: string; dato: string }[] = [
  { titulo: 'Entrenamiento Intensivo en Terapia Dialéctica Conductual', lugar: 'Centro Especializado en Psicoterapia Conductual Contextual (Perú)', dato: '32 horas' },
  { titulo: 'Entrenamiento intensivo en habilidades de Terapia de Aceptación y Compromiso', lugar: 'Neurocorp (Ecuador)', dato: '30 horas' },
  { titulo: 'Terapia Conductual Basada en Procesos (PBBT)', lugar: 'CIPCO (Argentina)', dato: '12 horas · 2023' },
  { titulo: 'Conceptualización de casos en PBBT', lugar: 'CIPCO (Argentina)', dato: '2024' },
  { titulo: 'Supervisión para terapeutas', lugar: 'PhD. Fabián Olaz', dato: '12 horas · 2024' },
  { titulo: 'Lectura de revisiones sistemáticas y metaanálisis para terapeutas', lugar: 'Liceo Contextual (Perú)', dato: '2024' },
  { titulo: 'Taller de DBT para trastornos de la conducta alimentaria', lugar: 'IJPCC (México)', dato: '2023' },
  { titulo: 'Programa STEPPS: tratamiento psicológico de la desregulación emocional persistente', lugar: 'ITACA (España)', dato: '15 horas' },
  { titulo: 'Análisis Funcional Aplicado a la Intervención Clínica', lugar: 'Instituto Terapéutico de Madrid, ITEMA (España)', dato: '16 nov – 16 dic 2020' },
  { titulo: 'Curso intensivo de Terapias Conductuales-Contextuales Infanto-Juvenil', lugar: 'Instituto de Terapias Conductuales-Contextuales (México)', dato: '60 horas' },
  { titulo: 'Terapias Conductuales-Contextuales: adultos, parejas y grupos', lugar: 'Instituto de Terapias Conductuales-Contextuales (México)', dato: '60 horas' },
  { titulo: 'Terapia Contextual para problemas interpersonales', lugar: 'Psycontex (México)', dato: '8 horas' },
  { titulo: 'Taller de Activación Conductual para la Depresión', lugar: 'Instituto de Salud Mental y Servicios Periciales (México)', dato: '8 horas' },
  { titulo: 'Niveles de interacción clínica', lugar: 'Grupo ACT (Argentina)', dato: '210 minutos' },
  { titulo: 'Iniciación a la hipnosis aplicada basada en la evidencia', lugar: 'Facultad de Ciencias de la Salud, Universitat Jaume I de Castelló (España)', dato: '8 horas' },
];

export const eventos: Item[] = [
  {
    fecha: 'Abril 2026',
    titulo: 'Organizador y expositor · Primeras Jornadas Internacionales de DBT «Fundamentos que transforman: explorando la DBT»',
    lugar: 'Vergel',
  },
  {
    fecha: '2024 – actualidad',
    titulo: 'Organizador y expositor en congresos y jornadas',
    lugar: 'Asociación Boliviana de Terapias Cognitivas, Conductuales y Contextuales (ABTCC)',
  },
];

export const conferencias: Item[] = [
  { fecha: '2026', titulo: 'Taller «La Matrix ACT: desarrollando la flexibilidad psicológica»', lugar: 'Ruwaynuna Formación · Perú' },
  {
    fecha: '2022',
    titulo: 'Conferencia «Introducción al uso de la Matrix y la flexibilidad psicológica»',
    lugar: 'Asociación Costarricense de Especialistas en Psicología Clínica',
  },
  {
    fecha: '2022',
    titulo: 'Conferencia «Introducción al uso de la Matrix y la flexibilidad psicológica»',
    lugar: 'Universidad Autónoma Gabriel René Moreno',
  },
  {
    fecha: '2022',
    titulo: 'Conferencia «Introducción a las terapias conductuales-contextuales»',
    lugar: 'Jornadas Nacionales de Psicoterapia Cognitiva y Terapias Contextuales',
  },
];

export const membresias: Item[] = [
  {
    fecha: '2024 – actualidad',
    titulo: 'Socio fundador',
    lugar: 'Asociación Boliviana de Terapias Cognitivas, Conductuales y Contextuales (ABTCC)',
  },
];
