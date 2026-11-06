
import { useState } from "react";
import Card from "../components/Card";

type EstadoReserva = "Pendiente" | "Confirmada" | "Rechazada";

interface Reserva {
  id: number;
  cliente: string;
  telefono: string;
  fecha: string;
  hora: string;
  personas: number;
  motivo: string;
  estado: EstadoReserva;
}

const reservasIniciales: Reserva[] = [
  {
    id: 1,
    cliente: "María Rojas",
    telefono: "7071-2345",
    fecha: "Hoy",
    hora: "12:30",
    personas: 4,
    motivo: "Almuerzo familiar",
    estado: "Pendiente",
  },
  {
    id: 2,
    cliente: "Javier Pérez",
    telefono: "7012-3456",
    fecha: "Hoy",
    hora: "13:00",
    personas: 2,
    motivo: "Aniversario",
    estado: "Pendiente",
  },
  {
    id: 3,
    cliente: "Lucía Cabrera",
    telefono: "7200-1234",
    fecha: "Hoy",
    hora: "20:00",
    personas: 6,
    motivo: "Cumpleaños",
    estado: "Confirmada",
  },
  {
    id: 4,
    cliente: "Andrés Flores",
    telefono: "7654-3210",
    fecha: "Mañana",
    hora: "19:30",
    personas: 3,
    motivo: "Cena con amigos",
    estado: "Pendiente",
  },
  {
    id: 5,
    cliente: "Camila Vargas",
    telefono: "7123-4567",
    fecha: "Mañana",
    hora: "21:00",
    personas: 8,
    motivo: "Evento de empresa",
    estado: "Pendiente",
  },
];

const filtros = [
  "Todas",
  "Pendiente",
  "Confirmada",
  "Rechazada",
] as const;

type Filtro = typeof filtros[number];

export default function Reservas() {
  const [reservas, setReservas] = useState<Reserva[]>(reservasIniciales);
  const [filtro, setFiltro] = useState<Filtro>("Todas");

  const cambiarEstado = (id: number, estado: EstadoReserva) => {
    setReservas(
      reservas.map((reserva) =>
        reserva.id === id
          ? { ...reserva, estado }
          : reserva
      )
    );
  };

  const reservasVisibles = reservas.filter(
    (reserva) =>
      filtro === "Todas" || reserva.estado === filtro
  );

  const contarReservas = (estado: EstadoReserva) => {
    return reservas.filter(
      (reserva) => reserva.estado === estado
    ).length;
  };

  return (
    <>
      <section className="encabezado-pagina">
        <span className="eyebrow">CONTROL DE MESAS</span>

        <h1>Reservas</h1>

        <p>
          Revisa las solicitudes de reserva y acéptalas
          o recházalas con un toque.
        </p>
      </section>

      <section className="metricas metricas--tres">
        <Card
          titulo="Pendientes"
          valor={String(contarReservas("Pendiente"))}
          detalle="Esperan tu respuesta"
          icono="◷"
          tono="ambar"
        />

        <Card
          titulo="Confirmadas"
          valor={String(contarReservas("Confirmada"))}
          detalle="Mesas aseguradas"
          icono="✓"
        />

        <Card
          titulo="Rechazadas"
          valor={String(contarReservas("Rechazada"))}
          detalle="No aceptadas"
          icono="✕"
          tono="rojo"
        />
      </section>

      <section className="panel">
        <div className="panel__encabezado">
          <div>
            <span className="eyebrow">SOLICITUDES</span>
            <h2>Aceptar reservas</h2>
          </div>

          <span className="etiqueta">
            {reservas.length} solicitudes
          </span>
        </div>

        <div className="menu-admin__filtros">
          <div className="filtros__botones">
            {filtros.map((f) => (
              <button
                key={f}
                type="button"
                className={`chip${filtro === f ? " chip--activo" : ""}`}
                onClick={() => setFiltro(f)}
              >
                {f === "Todas" ? "Todas" : `${f}s`}
              </button>
            ))}
          </div>
        </div>

        {reservasVisibles.length === 0 ? (
          <p className="vacio">
            No hay reservas en esta categoría.
          </p>
        ) : (
          <div className="reservas-lista">
            {reservasVisibles.map((reserva) => (
              <article className="reserva" key={reserva.id}>
                <span className="avatar">
                  {reserva.cliente
                    .split(" ")
                    .map((palabra) => palabra[0])
                    .join("")
                    .slice(0, 2)}
                </span>

                <div className="reserva__datos">
                  <strong>{reserva.cliente}</strong>

                  <small>
                    {reserva.fecha} · {reserva.hora} ·{" "}
                    {reserva.personas} personas
                  </small>

                  <small>
                    {reserva.motivo} · {reserva.telefono}
                  </small>
                </div>

                <span
                  className={`estado estado--${reserva.estado.toLowerCase()}`}
                >
                  {reserva.estado}
                </span>

                <div className="reserva__acciones">
                  {reserva.estado === "Pendiente" ? (
                    <>
                      <button
                        type="button"
                        className="btn btn--primario"
                        onClick={() =>
                          cambiarEstado(reserva.id, "Confirmada")
                        }
                      >
                        ✓ Aceptar
                      </button>

                      <button
                        type="button"
                        className="btn btn--secundario"
                        onClick={() =>
                          cambiarEstado(reserva.id, "Rechazada")
                        }
                      >
                        ✕ Rechazar
                      </button>
                    </>
                  ) : (
                    <button
                      type="button"
                      className="btn btn--secundario"
                      onClick={() =>
                        cambiarEstado(reserva.id, "Pendiente")
                      }
                    >
                      ↺ Deshacer
                    </button>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
