
export const restaurante = {
  nombre: "Fuego Celestial",
  slogan: "Carnes al fuego, mesa sin fin",
  direccion: "Av. Principal #123, Zona Central",
  telefono: "+591 000 00000",
  correo: "reservas@fuegocelestial.com",
  horarios: [
    { dia: "Lunes a jueves", horas: "12:00 – 15:30 · 19:00 – 23:00" },
    { dia: "Viernes y sábado", horas: "12:00 – 16:00 · 19:00 – 00:00" },
    { dia: "Domingo", horas: "12:00 – 17:00" },
  ],
};

export const pasos = [
  { id: 1, icono: "🪧", titulo: "Recibe tu tarjeta", texto: "Cada comensal recibe una tarjeta: verde para seguir sirviéndote, rojo para hacer una pausa." },
  { id: 2, icono: "🔥", titulo: "Llegan los espetos", texto: "Nuestros parrilleros pasan por tu mesa con cortes recién salidos de las brasas." },
  { id: 3, icono: "🥗", titulo: "Arma tu plato", texto: "Combina con papas, farofa, vinagreta y ensaladas frescas del buffet." },
  { id: 4, icono: "🍮", titulo: "Cierra con dulce", texto: "El rodízio termina con flan de la casa, vasitos de chocolate o tarta de frutas." },
];

export const planes = [
  { id: 1, nombre: "Rodízio Clásico", precio: 120, descripcion: "La experiencia completa para disfrutar sin límites.", incluye: ["6 cortes de carne a elección", "Buffet de acompañamientos", "Postre del día"] },
  { id: 2, nombre: "Rodízio Premium", precio: 150, descripcion: "Todos los cortes, incluidos los más especiales.", incluye: ["Todos los espetos, con picanha y panceta", "Buffet de acompañamientos", "Bebida sin alcohol ilimitada", "Postre a elección"], recomendado: true },
  { id: 3, nombre: "Rodízio Infantil", precio: 60, descripcion: "Para comensales de hasta 10 años.", incluye: ["3 cortes suaves", "Acompañamientos", "Postre"] },
];

export const valores = [
  { id: 1, icono: "🔥", titulo: "Fuego de verdad", texto: "Cocinamos con brasas de leña seleccionada, sin atajos ni sabores artificiales." },
  { id: 2, icono: "🥩", titulo: "Corte y origen", texto: "Trabajamos con proveedores locales y cuidamos el punto de cada corte." },
  { id: 3, icono: "🤝", titulo: "Mesa compartida", texto: "Creemos que una buena comida se disfruta en familia y con tiempo." },
  { id: 4, icono: "🌱", titulo: "Cuidado del entorno", texto: "Aprovechamos los recortes y reducimos el desperdicio en cocina." },
];

export const historia = [
  { id: 1, anio: "2012", titulo: "Una parrilla familiar", texto: "Todo empezó con una parrilla en el patio de casa y reuniones de domingo." },
  { id: 2, anio: "2016", titulo: "Abrimos nuestro local", texto: "Abrimos las puertas con un rodízio de seis cortes y mucha ilusión." },
  { id: 3, anio: "2020", titulo: "Más cortes, más mesas", texto: "Ampliamos el salón y sumamos la panceta crocante y la picanha al espeto." },
  { id: 4, anio: "2025", titulo: "Una tradición para todos", texto: "Hoy atendemos celebraciones, empresas y familias cada fin de semana." },
];

export const equipo = [
  { id: 1, nombre: "Chef Rodrigo Mendoza", cargo: "Maestro parrillero", foto: "chef", emoji: "👨‍🍳" },
  { id: 2, nombre: "Sebastián Mendoza", cargo: "Anfitrión de sala", foto: "anfitrion", emoji: "🧑‍💼" },
  { id: 3, nombre: "Daniel Suárez", cargo: "Cortador de carnes", foto: "daniel", emoji: "🔪" },
  { id: 4, nombre: "Valeria Rocha", cargo: "Pastelería y postres", foto: "repostera", emoji: "🍮" },
];

export const momentos = [
  { id: 1, foto: "mesa", titulo: "Almuerzos a la mesa", texto: "Cortes variados, buena conversación y espetos que no dejan de llegar." },
  { id: 2, foto: "celebracion", titulo: "Noches de celebración", texto: "Cumpleaños y aniversarios con espetos servidos a la vista de todos." },
  { id: 3, foto: "fuego", titulo: "Fuego de verdad", texto: "Asamos a la brasa y a la vista, para que veas cómo llega cada corte." },
];