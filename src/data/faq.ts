// Preguntas frecuentes. Se usan en /servicios, /preguntas-frecuentes y en los datos estructurados.

export interface Pregunta {
  q: string;
  a: string;
}

export const primeraSesion: Pregunta[] = [
  {
    q: '¿Qué pasa en la primera sesión?',
    a: 'Conversamos sobre lo que te trae, cómo afecta tu día a día y qué te gustaría que cambie. Puede durar un poco más que las demás.',
  },
  {
    q: '¿Tengo que contarlo todo de una vez?',
    a: 'No. Compartes lo que te sientas en condiciones de compartir. Vamos a tu ritmo.',
  },
  {
    q: '¿Y si no sé bien qué me pasa?',
    a: 'Está bien llegar así. Las primeras sesiones sirven justamente para entenderlo juntos.',
  },
  {
    q: '¿Cuántas sesiones voy a necesitar?',
    a: 'Depende de cada persona y de lo que quieras trabajar. Tras la evaluación inicial podemos estimarlo mejor.',
  },
  {
    q: '¿Lo que hable es confidencial?',
    a: 'Sí, con los límites que marca la ética profesional; por ejemplo, si hay un riesgo grave para tu vida o la de otra persona.',
  },
  {
    q: '¿La terapia online funciona?',
    a: 'Para muchos motivos de consulta, la investigación muestra resultados similares a la terapia presencial.',
  },
];

export const sesionesYPagos: Pregunta[] = [
  {
    q: '¿Cuánto dura una sesión y cada cuánto son?',
    a: 'Las sesiones duran alrededor de 1 hora y suelen ser semanales o quincenales. La primera sesión, o algunos temas, pueden extenderse un poco más.',
  },
  {
    q: '¿Dónde atiendes?',
    a: 'De forma presencial en mi consultorio en Irpavi, Calle 16, La Paz – Bolivia. Y online, por Google Meet u otra plataforma segura, en Bolivia y el exterior.',
  },
  {
    q: '¿Qué necesito para una sesión online?',
    a: 'Solo buena conexión y un espacio tranquilo para expresarte con comodidad.',
  },
  {
    q: '¿Cómo agendo una sesión?',
    a: 'Me escribes por WhatsApp y coordinamos el día, la hora y la modalidad que mejor te quede.',
  },
  {
    q: '¿Cómo se paga en Bolivia?',
    a: 'En efectivo o con código QR.',
  },
  {
    q: '¿Cómo se paga desde el exterior?',
    a: 'Con un link de pago seguro (como una compra online) o por Wise.',
  },
  {
    q: '¿Cuándo se realiza el pago?',
    a: 'Todos los pagos se realizan un día antes o el mismo día de la sesión.',
  },
  {
    q: '¿Para qué sirven los paquetes?',
    a: 'Si quieres comprometerte con un proceso continuo, los paquetes te permiten asegurar tus sesiones a un precio menor.',
  },
  {
    q: '¿Qué es el consentimiento informado?',
    a: 'Es un documento breve que explica cómo funciona la terapia: sus objetivos, la confidencialidad y sus límites, los honorarios y tus derechos como consultante. Lo revisamos juntos y lo firmas antes de iniciar: es un requisito para comenzar la terapia.',
  },
];
