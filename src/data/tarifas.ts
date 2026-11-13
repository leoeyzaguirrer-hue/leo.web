// Tarifas públicas (página /tarifas). Para actualizar precios, cambia solo este archivo.

export const tarifas = [
  {
    id: 'bolivia',
    titulo: 'En Bolivia',
    icono: 'pin',
    precio: '250 Bs',
    paquetes: [
      { sesiones: '4 sesiones', precio: '900 Bs' },
      { sesiones: '6 sesiones', precio: '1350 Bs' },
    ],
    pago: 'efectivo o código QR.',
    mensaje: 'tarifasBolivia',
  },
  {
    id: 'exterior',
    titulo: 'Desde el exterior',
    icono: 'globe',
    precio: '35 USD',
    paquetes: [
      { sesiones: '4 sesiones', precio: '130 USD' },
      { sesiones: '6 sesiones', precio: '195 USD' },
    ],
    pago: 'link de pago seguro (como una compra online) o Wise.',
    mensaje: 'tarifasExterior',
  },
] as const;
