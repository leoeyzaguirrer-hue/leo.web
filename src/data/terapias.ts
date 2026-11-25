// Contenido de las páginas por especialidad (/terapia-ansiedad, /terapia-depresion, /terapia-duelo).
// Todas usan el mismo molde: src/components/TerapiaPage.astro.
// Cuidado con el lenguaje: nada que sugiera que la evaluación o el diagnóstico no importan.

import type { Pregunta } from './faq';

export interface Terapia {
  slug: string;
  meta: { title: string; description: string };
  hero: { eyebrow: string; title: string; crumb: string; lead: string };
  senales: string[];
  nota: string;
  ciclo: {
    titulo: string;
    intro: string;
    a: { titulo: string; texto: string; ejemplo: string };
    b: { titulo: string; texto: string; ejemplo: string };
    c: { titulo: string; corto: string; largo: string; cierre: string };
  };
  como: { titulo: string; intro: string; pasos: { titulo: string; texto: string }[] };
  noHaremos: { titulo: string; texto: string };
  faqTitulo: string;
  faq: Pregunta[];
  /** Mensaje prellenado de WhatsApp: también sirve para saber desde qué página escribió. */
  whatsapp: string;
}

const notaEvaluacion = 'En las primeras sesiones hacemos una evaluación para entender qué te pasa y qué necesitas.';

const revisarAvance = {
  titulo: 'Revisar el avance',
  texto: 'Cada cierto número de sesiones miramos juntos si lo que hacemos está funcionando, y ajustamos el plan si hace falta.',
};

const online = (extra: string): Pregunta => ({
  q: '¿Funciona online?',
  a: `Sí. Para muchas personas los resultados son similares a la terapia presencial${extra}`,
});

export const ansiedad: Terapia = {
  slug: 'terapia-ansiedad',
  meta: {
    title: 'Terapia para la ansiedad en La Paz y online',
    description:
      'Psicoterapia para la ansiedad, ataques de pánico, ansiedad social y preocupación constante, con ACT y análisis funcional. Presencial en Irpavi, La Paz, y online.',
  },
  hero: {
    eyebrow: 'Terapia para la ansiedad · La Paz y online',
    title: 'Cuando la ansiedad empieza a decidir por ti',
    crumb: 'Terapia para la ansiedad',
    lead: 'La ansiedad no es tu enemiga: es una alarma que se volvió demasiado sensible. En terapia aprendemos a convivir con ella sin que maneje tu vida.',
  },
  senales: [
    'Le das vueltas a todo y no puedes parar',
    'Sientes el corazón acelerado, falta de aire o un nudo en el estómago',
    'Has tenido ataques de pánico, o vives con miedo a tenerlos',
    'Evitas reuniones, llamadas o lugares por miedo a pasarla mal',
    'Te cuesta dormir porque la cabeza no se apaga',
    'Revisas, preguntas o planificas de más para sentirte seguro',
    'Te preocupa mucho lo que otros piensen de ti',
    'Estás cansado de vivir siempre en alerta',
  ],
  nota: `Si algo de esto te está quitando espacio para lo que te importa, vale la pena consultarlo. ${notaEvaluacion}`,
  ciclo: {
    titulo: 'El alivio de hoy es el costo de mañana',
    intro: 'Lo que hacemos para calmar la ansiedad funciona en el momento. Por eso lo repetimos. Un ejemplo:',
    a: {
      titulo: 'Suena la alarma',
      texto: 'Un pensamiento, una sensación en el cuerpo o una situación disparan la ansiedad.',
      ejemplo: '«¿Y si me da un ataque en el minibús?»',
    },
    b: { titulo: 'Haces algo para calmarla', texto: 'Evitar, escapar, revisar, pedir que te tranquilicen.', ejemplo: 'Dejas de tomar el minibús.' },
    c: {
      titulo: 'Alivio ahora, costo después',
      corto: 'la ansiedad baja. Funciona.',
      largo: 'tu mundo se achica y la alarma se vuelve más sensible.',
      cierre: 'La terapia apunta a ese círculo, no a que nunca más sientas ansiedad.',
    },
  },
  como: {
    titulo: 'Un plan hecho a partir de tu historia',
    intro:
      'Trabajo principalmente con la Terapia de Aceptación y Compromiso (ACT), que cuenta con numerosos ensayos clínicos en ansiedad, integrada con el análisis funcional.',
    pasos: [
      {
        titulo: 'Entender tu ansiedad',
        texto: 'En las primeras dos sesiones vemos en qué situaciones aparece, qué haces cuando llega y qué te está costando. Es el análisis funcional: el mapa de tu ansiedad.',
      },
      {
        titulo: 'Hacer espacio',
        texto: 'Aprendes a notar pensamientos y sensaciones sin pelear con ellos y sin obedecerlos. No para que desaparezcan, sino para que dejen de dar las órdenes.',
      },
      {
        titulo: 'Volver a lo que te importa',
        texto: 'Aclaramos qué quieres para tu vida y te acercas, de a poco y con un plan, a lo que la ansiedad te fue quitando. Siempre a tu ritmo.',
      },
      revisarAvance,
    ],
  },
  noHaremos: {
    titulo: 'Sin promesas mágicas ni «piensa positivo»',
    texto:
      'Nadie puede prometerte que nunca más sentirás ansiedad, y yo tampoco. No te voy a pedir que dejes de pensar lo que piensas, y no vas a hacer nada para lo que no estés listo. Lo que sí hacemos es que la ansiedad deje de decidir tus pasos.',
  },
  faqTitulo: 'Preguntas sobre la ansiedad',
  faq: [
    {
      q: '¿Cómo sé si mi ansiedad necesita terapia?',
      a: 'Sentir ansiedad es humano. Vale la pena consultar cuando se vuelve muy frecuente o intensa, o cuando empiezas a organizar tu vida alrededor de evitarla: dejas planes, lugares o personas para no sentirla.',
    },
    {
      q: '¿Necesito medicación?',
      a: 'Como psicólogo no receto medicación. Muchas personas trabajan su ansiedad solo con psicoterapia. Si en la evaluación vemos que una consulta con psiquiatría puede ayudarte, te lo digo y, si quieres, coordino con tu médico.',
    },
    {
      q: '¿Cuánto dura la terapia para la ansiedad?',
      a: 'Depende de cada persona y de lo que quieras trabajar. Después de la evaluación inicial te doy una estimación, y revisamos juntos el avance a lo largo del proceso.',
    },
    online(', y tiene una ventaja: practicas lo que trabajamos en tu propio entorno.'),
    {
      q: '¿Y si me da un ataque de pánico en la sesión?',
      a: 'Está bien que pase. Lo atravesamos juntos, con calma, y puede ser una buena oportunidad para aprender a relacionarte de otra forma con esas sensaciones.',
    },
  ],
  whatsapp: 'Hola Leo, vi tu página sobre ansiedad y quisiera agendar una primera sesión.',
};

export const depresion: Terapia = {
  slug: 'terapia-depresion',
  meta: {
    title: 'Terapia para la depresión y la falta de sentido en La Paz y online',
    description:
      'Psicoterapia para la depresión, el desánimo, la sensación de vacío y la falta de sentido, con Activación Conductual y ACT. Presencial en Irpavi, La Paz, y online.',
  },
  hero: {
    eyebrow: 'Terapia para la depresión y el sentido de vida · La Paz y online',
    title: 'Cuando la vida se vuelve cuesta arriba',
    crumb: 'Terapia para la depresión',
    lead: 'La depresión no es flojera ni falta de voluntad. Es un círculo que se cierra sobre sí mismo, y se puede abrir. En terapia lo hacemos paso a paso, hacia una vida con más sentido.',
  },
  senales: [
    'Todo te cuesta el doble, incluso lo más simple',
    'Ya no disfrutas lo que antes te gustaba',
    'Te sientes vacío, o como si solo sobrevivieras',
    'Te aíslas y cancelas planes',
    'Duermes mucho o casi nada, y vives cansado',
    'Te culpas o sientes que no vales lo suficiente',
    'Sientes que tu vida perdió el rumbo',
    'Te cuesta imaginar que las cosas puedan mejorar',
  ],
  nota: `Si algo de esto te está quitando espacio para lo que te importa, vale la pena consultarlo. ${notaEvaluacion}`,
  ciclo: {
    titulo: 'Cuando el ánimo decide la agenda',
    intro: 'Con el desánimo, solemos esperar a tener ganas para hacer las cosas. Pero las ganas suelen llegar después. Un ejemplo:',
    a: {
      titulo: 'Llega el desánimo',
      texto: 'Cansancio, tristeza o pensamientos como «¿para qué?».',
      ejemplo: '«Hoy no tengo energía para ver a nadie.»',
    },
    b: { titulo: 'Te retiras', texto: 'Te quedas en casa, postergas, te desconectas.', ejemplo: 'Cancelas el plan con tus amigos.' },
    c: {
      titulo: 'Alivio ahora, costo después',
      corto: 'te ahorras el esfuerzo.',
      largo: 'hay cada vez menos cosas que te hagan bien, y el ánimo baja más.',
      cierre: 'La terapia apunta a ese círculo: dar pasos aunque las ganas todavía no lleguen.',
    },
  },
  como: {
    titulo: 'Pasos pequeños, con dirección',
    intro:
      'Trabajo principalmente con Activación Conductual, uno de los tratamientos con más respaldo científico para la depresión, junto con ACT y el análisis funcional.',
    pasos: [
      {
        titulo: 'Entender tu desánimo',
        texto: 'En las primeras dos sesiones vemos cómo son tus días, qué dejaste de hacer y qué mantiene el desánimo. Es el análisis funcional: el mapa de lo que te pasa.',
      },
      {
        titulo: 'Pequeños pasos con sentido',
        texto: 'Sumamos, de a poco, actividades que te importan y te hacen bien. Sin esperar a tener ganas: las ganas suelen venir después.',
      },
      {
        titulo: 'Volver a lo que te importa',
        texto: 'Aclaramos tus valores: qué quieres que signifique tu vida. Eso le da dirección a cada paso, incluso en los días difíciles.',
      },
      revisarAvance,
    ],
  },
  noHaremos: {
    titulo: 'Sin «ponle ganas» ni frases vacías',
    texto:
      'La depresión no se resuelve con fuerza de voluntad, y no voy a pedirte que te sientas bien a la fuerza. Tampoco puedo prometerte que nunca más tendrás un día gris. Lo que sí hacemos es que el desánimo deje de decidir tus días.',
  },
  faqTitulo: 'Preguntas sobre la depresión',
  faq: [
    {
      q: '¿Cómo sé si es depresión o una mala racha?',
      a: 'Todas las personas tenemos días tristes. Vale la pena consultar cuando el desánimo dura semanas, cuando afecta tu trabajo, tus relaciones o tu cuidado personal, o cuando ya casi nada te entusiasma. En la evaluación inicial lo vemos con detalle.',
    },
    {
      q: '¿Necesito medicación?',
      a: 'Como psicólogo no receto medicación. En muchos casos la psicoterapia es suficiente y, en otros, conviene combinarla con tratamiento psiquiátrico. Si en la evaluación vemos que una consulta con psiquiatría puede ayudarte, te lo digo y, si quieres, coordino con tu médico.',
    },
    {
      q: '¿Y si a veces pienso que no quiero vivir?',
      a: 'Dímelo. Muchas personas con depresión lo sienten, y se puede hablar en terapia sin juicios. Lo evaluamos con cuidado desde la primera sesión. Si en este momento estás en riesgo, acude al servicio de emergencias más cercano o pide ayuda a alguien de confianza ahora.',
    },
    {
      q: '¿Cuánto dura la terapia para la depresión?',
      a: 'Depende de cada persona y de lo que quieras trabajar. Después de la evaluación inicial te doy una estimación, y revisamos juntos el avance a lo largo del proceso.',
    },
    online('. Y cuando cuesta salir de casa, puede hacer más fácil empezar.'),
  ],
  whatsapp: 'Hola Leo, vi tu página sobre depresión y quisiera agendar una primera sesión.',
};

export const duelo: Terapia = {
  slug: 'terapia-duelo',
  meta: {
    title: 'Terapia para el duelo y las rupturas de pareja en La Paz y online',
    description:
      'Psicoterapia para el duelo por la muerte de un ser querido y el duelo por ruptura amorosa, separación o divorcio, con ACT y FAP. Presencial en Irpavi, La Paz, y online.',
  },
  hero: {
    eyebrow: 'Terapia para el duelo y las rupturas de pareja · La Paz y online',
    title: 'Cuando perder a alguien te deja sin piso',
    crumb: 'Terapia para el duelo',
    lead: 'Por una muerte o por una separación, el duelo es el precio de haber querido. No se trata de olvidar, sino de encontrar cómo seguir viviendo con lo que pasó.',
  },
  senales: [
    'No puedes dejar de pensar en esa persona',
    'Revisas sus redes, fotos o mensajes una y otra vez',
    'Evitas lugares, canciones o personas que te la recuerdan',
    'Sientes culpa por lo que hiciste o no hiciste',
    'Te cuesta imaginar tu vida sin esa persona',
    'Sientes que los demás esperan que ya lo hayas superado',
    'El dolor no se alivia con el paso del tiempo',
    'Te cuesta volver a confiar o a vincularte',
  ],
  nota: `El duelo es una respuesta natural ante una pérdida. Cuando el dolor no se alivia con el tiempo o te impide vivir, vale la pena consultarlo. ${notaEvaluacion}`,
  ciclo: {
    titulo: 'Cuando el dolor queda en pausa',
    intro: 'Ante una pérdida, es natural buscar a la persona o huir del dolor. Cuando eso se vuelve la regla, el duelo se estanca. Un ejemplo:',
    a: {
      titulo: 'Aparece el recuerdo',
      texto: 'Una fecha, una canción, un lugar o una noche en silencio.',
      ejemplo: '«Hoy hace un año que nos separamos.»',
    },
    b: {
      titulo: 'Buscas o escapas',
      texto: 'Revisas sus redes, relees mensajes, o evitas todo lo que te la recuerde.',
      ejemplo: 'Pasas la noche mirando sus fotos.',
    },
    c: {
      titulo: 'Alivio ahora, costo después',
      corto: 'sientes cerca a esa persona, o te ahorras el dolor.',
      largo: 'la herida sigue abierta y tu vida se queda en pausa.',
      cierre: 'La terapia no busca que olvides, sino que el dolor deje espacio para seguir viviendo.',
    },
  },
  como: {
    titulo: 'Un espacio para el dolor y para tu vida',
    intro:
      'Trabajo con la Terapia de Aceptación y Compromiso (ACT) y la Psicoterapia Analítica Funcional (FAP), que pone el foco en los vínculos, integradas con el análisis funcional.',
    pasos: [
      {
        titulo: 'Entender tu duelo',
        texto: 'En las primeras dos sesiones conversamos sobre la pérdida, cómo la estás viviendo y qué te está costando más. Es el análisis funcional: el mapa de tu duelo.',
      },
      {
        titulo: 'Hacer espacio al dolor',
        texto: 'Aprendes a sentir la tristeza, la rabia o la culpa sin que te arrastren. El dolor no se apura, pero tampoco tiene por qué dirigir tu vida.',
      },
      {
        titulo: 'Reconstruir tu vida',
        texto: 'Aclaramos qué te importa hoy y das pasos para volver a tus relaciones, tus proyectos y tu día a día, llevando contigo lo que esa persona significó.',
      },
      revisarAvance,
    ],
  },
  noHaremos: {
    titulo: 'Sin apuros ni «ya deberías estar mejor»',
    texto:
      'Cada duelo tiene su tiempo y no voy a apurar el tuyo. Tampoco te voy a pedir que olvides a nadie ni que te sientas bien antes de estar listo. Lo que sí hacemos es que el dolor deje de decidir por ti.',
  },
  faqTitulo: 'Preguntas sobre el duelo',
  faq: [
    {
      q: '¿Cuánto dura un duelo?',
      a: 'No hay un tiempo fijo: cada pérdida y cada persona son distintas. Vale la pena consultar cuando el dolor no se alivia con los meses, o cuando te impide trabajar, relacionarte o cuidarte. En la evaluación inicial lo vemos con detalle.',
    },
    {
      q: '¿Es exagerado ir a terapia por una ruptura?',
      a: 'No. Una ruptura puede doler tanto como otras pérdidas, sobre todo si fue una relación larga o importante. Pedir ayuda no es exagerar.',
    },
    {
      q: '¿Me vas a pedir que olvide o que pase la página?',
      a: 'No. No se trata de olvidar, sino de encontrar un lugar para lo que viviste y seguir adelante con tu vida.',
    },
    {
      q: '¿Atiendes duelos por muerte y por separación?',
      a: 'Sí, los dos. Son pérdidas distintas, pero comparten mucho: el dolor, la añoranza y la pregunta de cómo seguir.',
    },
    online(', y puedes hacerla desde un lugar donde te sientas cómodo para hablar de algo tan personal.'),
  ],
  whatsapp: 'Hola Leo, vi tu página sobre duelo y quisiera agendar una primera sesión.',
};
