// Contenido de la carta de presentación (página /servicios).

export const secciones = [
  { id: 'quien-soy', label: 'Quién soy' },
  { id: 'como-trabajo', label: 'Cómo trabajo' },
  { id: 'enfoques', label: 'Enfoques' },
  { id: 'proceso', label: 'El proceso' },
  { id: 'primera-sesion', label: 'Tu primera sesión' },
  { id: 'formacion', label: 'Formación' },
] as const;

export const pilares = [
  {
    titulo: 'Análisis Funcional de la Conducta',
    texto:
      'En lugar de quedarnos en la etiqueta (ansiedad, depresión), miramos en qué situaciones aparece lo que te hace sufrir, qué consigues con ello a corto plazo y qué te cuesta a largo plazo. Así sabemos qué cambiar.',
  },
  {
    titulo: 'Teoría de los Marcos Relacionales (RFT)',
    texto:
      'Una teoría científica sobre el lenguaje humano. Explica cómo aprendemos a relacionar palabras y experiencias, y por qué recordar o imaginar algo puede afectarnos casi como vivirlo. Nos ayuda a usar el lenguaje a tu favor.',
  },
];

export const queHace = [
  'Mira tu conducta en su contexto: tu historia, tus relaciones y tu entorno.',
  'Busca entender para qué funciona lo que haces, no solo cómo se ve.',
  'Te ayuda a relacionarte de otra forma con lo que piensas y sientes.',
  'Construye contigo pasos concretos hacia lo que valoras, y revisa juntos si funcionan.',
];

export const principios = [
  {
    titulo: 'Más que reducir síntomas',
    texto: 'Que el malestar pese menos y, sobre todo, que puedas construir una vida con más sentido.',
  },
  {
    titulo: 'Flexibilidad psicológica',
    texto: 'Relacionarte de otra forma con pensamientos y emociones difíciles, y elegir hacia dónde moverte.',
  },
  {
    titulo: 'Basado en evidencia',
    texto: 'Herramientas prácticas, estudiadas en investigación científica y ajustadas a tu situación.',
  },
];

export const motivos = [
  'Ansiedad',
  'Depresión y desánimo',
  'Estrés crónico',
  'Dolor persistente',
  'Ansiedad social',
  'Experiencias de trauma',
  'Relaciones difíciles',
  'Sensación de vacío',
  'Autoestima',
  'Aislamiento',
  'Emociones muy intensas',
  'Identidad y sentido',
];

export const enfoques = [
  {
    sigla: 'ACT',
    nombre: 'Terapia de Aceptación y Compromiso',
    util: 'ansiedad, depresión, estrés crónico, dolor persistente, ansiedad social, trauma y preguntas sobre la propia identidad.',
    como: 'aprendes a hacer espacio a pensamientos y emociones difíciles sin pelear con ellos, y a dar pasos concretos hacia lo que valoras. Cuenta con cientos de ensayos clínicos que la respaldan.',
  },
  {
    sigla: 'FAP',
    nombre: 'Psicoterapia Analítica Funcional',
    util: 'dificultades en las relaciones, sensación de vacío, depresión recurrente, autoestima, evitación social y aislamiento.',
    como: 'lo que te pasa con otras personas también aparece en la relación terapéutica. Ahí ensayamos nuevas formas de vincularte, que luego llevas a tu vida diaria.',
  },
  {
    sigla: 'AC',
    nombre: 'Activación Conductual',
    util: 'depresión. Es uno de los tratamientos con más respaldo para el desánimo.',
    como: 'identificamos los patrones de evitación que sostienen el desánimo y sumamos, poco a poco, actividades con sentido para ti. En depresión moderada a grave ha mostrado resultados comparables a la medicación.',
  },
  {
    sigla: 'DBT',
    nombre: 'Terapia Dialéctico Conductual',
    util: 'desregulación emocional intensa, conductas autolesivas y trastorno límite de la personalidad (TLP).',
    como: 'un modelo muy estructurado y de larga duración que enseña habilidades para regular emociones, tolerar el malestar y relacionarte con otras personas.',
  },
];

export const pasos = [
  {
    titulo: 'Primer contacto',
    nota: '',
    texto: 'Me escribes y coordinamos el día, la hora y la modalidad que mejor te quede.',
  },
  {
    titulo: 'Evaluación inicial',
    nota: 'primeras 2 sesiones',
    texto:
      'Conversamos sobre lo que te trae y lo que quieres para tu vida. Usamos el <strong>Análisis Funcional</strong>: una forma de entender en qué situaciones aparece lo que te hace sufrir, qué lo mantiene, y qué recursos y fortalezas ya tienes.',
  },
  {
    titulo: 'Objetivos en común',
    nota: '',
    texto: 'Definimos juntos hacia dónde queremos ir en la terapia.',
  },
  {
    titulo: 'Sesiones de trabajo',
    nota: '',
    texto:
      'Sesiones de alrededor de <strong>1 hora</strong>, <strong>semanales o quincenales</strong>. La primera sesión, o algunos temas, pueden extenderse un poco más.',
  },
  {
    titulo: 'Espaciar y cerrar',
    nota: '',
    texto: 'A medida que avanzas, espaciamos los encuentros hasta llegar al cierre del proceso.',
  },
];

export const formacion = [
  {
    titulo: 'Maestría en Análisis Funcional del Comportamiento',
    detalle: 'Otorgada por SAVECC',
  },
  {
    titulo: 'Formación especializada en terapias conductuales-contextuales',
    detalle: 'ACT, FAP, DBT, AC, PBBT e IBT · CIPCO',
  },
  {
    titulo: 'Diplomados y entrenamientos intensivos',
    detalle: 'En Latinoamérica y Europa, con enfoque en la práctica clínica basada en evidencia',
  },
  {
    titulo: 'Docente nacional e internacional',
    detalle: 'Máster de ITACA Formaciones, Universidad Católica «San Pablo» y Universidad Gabriel René Moreno',
  },
  {
    titulo: 'Conferencista',
    detalle: 'En congresos y jornadas nacionales e internacionales sobre terapias contextuales',
  },
  {
    titulo: 'Miembro fundador de la ABTCC',
    detalle: 'Asociación Boliviana de Terapias Cognitivas, Conductuales y Contextuales',
  },
];
