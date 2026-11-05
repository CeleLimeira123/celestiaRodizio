
import { useState } from "react";

interface Plato {
  id: number;
  nombre: string;
  descripcion: string;
  categoria: string;
  precio?: number;
  foto: string;
  etiqueta?: string;
}

const platos: Plato[] = [
  {
    id: 1,
    nombre: "Picanha",
    descripcion: "Picanha tierna con una capa dorada de grasa, cortada en la mesa y servida recién salida de las brasas.",
    categoria: "Espetos del rodízio",
    foto: "/photos/picanha.jpg",
    etiqueta: "Más solicitado"
  },
  {
    id: 2,
    nombre: "Panceta crocante",
    descripcion: "Panceta de cerdo asada lentamente, con exterior crujiente y glaseado de frutos rojos.",
    categoria: "Espetos del rodízio",
    foto: "/photos/panceta.jpg"
  },
  {
    id: 3,
    nombre: "Cortes de res al espeto",
    descripcion: "Selección de cortes de res sazonados y asados al fuego para servir directamente en la mesa.",
    categoria: "Espetos del rodízio",
    foto: "/photos/espetos-res.jpg"
  },
  {
    id: 4,
    nombre: "Chorizo y pollo",
    descripcion: "Chorizo parrillero y pollo dorado, una combinación suave y sabrosa.",
    categoria: "Espetos del rodízio",
    foto: "/photos/chorizo-pollo.jpg"
  },
  {
    id: 5,
    nombre: "Fraldinha con farofa",
    descripcion: "Tiras de fraldinha a la brasa acompañadas de vinagreta fresca y farofa dorada.",
    categoria: "Espetos del rodízio",
    foto: "/photos/fraldinha.jpg"
  },
  {
    id: 6,
    nombre: "Parrillada mixta",
    descripcion: "Bandeja para compartir con diferentes carnes, chorizos, papas y acompañamientos de la casa.",
    categoria: "Parrilladas y platos",
    precio: 190,
    foto: "/photos/parrillada-mixta.jpg",
    etiqueta: "Para compartir"
  },
  {
    id: 7,
    nombre: "Costillar glaseado",
    descripcion: "Costillar asado con glaseado de la casa, pollo grillado, papas rústicas y ensalada.",
    categoria: "Parrilladas y platos",
    precio: 120,
    foto: "/photos/costillar.jpg"
  },
  {
    id: 8,
    nombre: "Tabla de entraña y chorizo",
    descripcion: "Entraña en lonjas, chorizo parrillero, pan tostado y vinagreta fresca.",
    categoria: "Parrilladas y platos",
    precio: 110,
    foto: "/photos/tabla-entrana.jpg"
  },
  {
    id: 9,
    nombre: "Lomo con ensalada",
    descripcion: "Lonjas de lomo a la parrilla con ensalada fresca y papa al horno.",
    categoria: "Parrilladas y platos",
    precio: 100,
    foto: "/photos/lomo-ensalada.jpg"
  },
  {
    id: 10,
    nombre: "Hamburguesa de la casa",
    descripcion: "Medallón de carne a la parrilla con queso, tocino, cebolla y salsas de la casa.",
    categoria: "Parrilladas y platos",
    precio: 65,
    foto: "/photos/hamburguesas.jpg"
  },
  {
    id: 11,
    nombre: "Flan de la casa",
    descripcion: "Flan cremoso con caramelo dorado, preparado por nuestra pastelera.",
    categoria: "Postres",
    precio: 22,
    foto: "/photos/flan.jpg",
    etiqueta: "Clásico"
  },
  {
    id: 12,
    nombre: "Vasitos de chocolate",
    descripcion: "Capas de crema, chocolate y galleta molida servidas en porción individual.",
    categoria: "Postres",
    precio: 25,
    foto: "/photos/vasitos-chocolate.jpg"
  },
  {
    id: 13,
    nombre: "Copas heladas",
    descripcion: "Crema helada con salsa de chocolate, frutas y galletas crocantes.",
    categoria: "Postres",
    precio: 30,
    foto: "/photos/copas-heladas.jpg"
  },
  {
    id: 14,
    nombre: "Tarta de frutas",
    descripcion: "Base crocante, crema suave y frutas frescas de temporada.",
    categoria: "Postres",
    precio: 28,
    foto: "/photos/tarta-frutas.jpg"
  }
];

export default function Menu() {

  const [filtro, setFiltro] = useState("Todos");
  const [busqueda, setBusqueda] = useState("");

  // Guardar los platos que cumplen con la busqueda y el filtro
  const platosVisibles: Plato[] = [];

  for (let i = 0; i < platos.length; i++) {

    let plato = platos[i];

    let cumpleCategoria = false;
    let cumpleBusqueda = false;

    // Comprobar la categoria
    if (filtro === "Todos" || plato.categoria === filtro) {
      cumpleCategoria = true;
    }

    // Convertir los textos a minusculas
    let nombre = plato.nombre.toLowerCase();
    let descripcion = plato.descripcion.toLowerCase();
    let textoBusqueda = busqueda.toLowerCase();

    // Comprobar si coincide con la busqueda
    if (
      nombre.includes(textoBusqueda) ||
      descripcion.includes(textoBusqueda)
    ) {
      cumpleBusqueda = true;
    }

    // Agregar el plato si cumple ambas condiciones
    if (cumpleCategoria && cumpleBusqueda) {
      platosVisibles.push(plato);
    }
  }

  // Contar los platos que tienen precio individual
  let platosConPrecio = 0;

  for (let i = 0; i < platos.length; i++) {
    if (platos[i].precio !== undefined) {
      platosConPrecio++;
    }
  }

  // Contar los postres
  let cantidadPostres = 0;

  for (let i = 0; i < platos.length; i++) {
    if (platos[i].categoria === "Postres") {
      cantidadPostres++;
    }
  }

  return (
    <>
      <section className="encabezado-pagina">

        <span className="eyebrow">
          CARTA Y CONTROL DE PRODUCTOS
        </span>

        <h1>Menú del restaurante</h1>

        <p>
          Consulta los platos, sus descripciones, fotografías y precios
          para mantener actualizada la oferta de Fuego Celestial.
        </p>

      </section>


      <section className="metricas metricas--tres">

        <div className="card">
          <span className="card__cabecera">Platos en catálogo</span>
          <strong className="card__valor">{platos.length}</strong>
          <p className="card__detalle">Productos registrados</p>
        </div>

        <div className="card">
          <span className="card__cabecera">Platos a la carta</span>
          <strong className="card__valor">{platosConPrecio}</strong>
          <p className="card__detalle">Con precio individual</p>
        </div>

        <div className="card">
          <span className="card__cabecera">Opciones de postre</span>
          <strong className="card__valor">{cantidadPostres}</strong>
          <p className="card__detalle">Preparaciones de pastelería</p>
        </div>

      </section>


      <section className="panel">

        <div className="panel__encabezado">

          <div>
            <span className="eyebrow">CATÁLOGO</span>
            <h2>Platos y precios</h2>
          </div>

          <span className="etiqueta">Precios en bolivianos</span>

        </div>


        <div className="menu-admin__filtros">

          <div className="filtros__botones">

            <button
              className={filtro === "Todos" ? "chip chip--activo" : "chip"}
              onClick={() => setFiltro("Todos")}
            >
              Todos
            </button>

            <button
              className={filtro === "Espetos del rodízio" ? "chip chip--activo" : "chip"}
              onClick={() => setFiltro("Espetos del rodízio")}
            >
              Espetos del rodízio
            </button>

            <button
              className={filtro === "Parrilladas y platos" ? "chip chip--activo" : "chip"}
              onClick={() => setFiltro("Parrilladas y platos")}
            >
              Parrilladas y platos
            </button>

            <button
              className={filtro === "Postres" ? "chip chip--activo" : "chip"}
              onClick={() => setFiltro("Postres")}
            >
              Postres
            </button>

          </div>


          <input
            className="buscador"
            type="text"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            placeholder="Buscar plato o descripción..."
          />

        </div>


        {platosVisibles.length === 0 ? (

          <p className="vacio">
            No hay platos que coincidan con la búsqueda.
          </p>

        ) : (

          <div className="menu-admin__grid">

            {platosVisibles.map((plato) => (

              <article className="menu-admin__plato" key={plato.id}>

                <img src={plato.foto} alt={plato.nombre} />

                <div className="menu-admin__contenido">

                  <div className="menu-admin__titulo">

                    <h3>{plato.nombre}</h3>

                    {plato.etiqueta && (
                      <span className="etiqueta">
                        {plato.etiqueta}
                      </span>
                    )}

                  </div>

                  <p>{plato.descripcion}</p>

                  <div className="menu-admin__pie">

                    <small>{plato.categoria}</small>

                    <strong>
                      {plato.precio !== undefined
                        ? "Bs " + plato.precio
                        : "Incluido en rodízio"}
                    </strong>

                  </div>

                </div>

              </article>

            ))}

          </div>

        )}

      </section>


      <section className="panel menu-admin__nota">

        <strong>Nota administrativa:</strong>

        Los espetos están incluidos en los planes de rodízio.
        Los precios individuales de parrilladas, platos y postres
        son valores de referencia del catálogo académico y pueden
        editarse según la lista vigente del restaurante.

      </section>

    </>
  );
}
