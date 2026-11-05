import { Link } from "react-router-dom";
import Card from "../components/Card";

const indicadores = [
  { id: 1, titulo: "Clientes registrados", valor: "248", detalle: "+12 este mes", icono: "♙", tono: "naranja" },
  { id: 2, titulo: "Reservas de hoy", valor: "36", detalle: "8 pendientes de confirmar", icono: "▣", tono: "rojo" },
  { id: 3, titulo: "Ingresos del mes", valor: "Bs 28.450", detalle: "+8,4% respecto al mes anterior", icono: "Bs", tono: "ambar" },
  { id: 4, titulo: "Ocupación promedio", valor: "78%", detalle: "Capacidad del salón", icono: "◷", tono: "vino" },
];
const actividad = [
  { id: 1, inicial: "MR", nombre: "María Rojas", detalle: "Reserva para 4 personas", hora: "12:35" },
  { id: 2, inicial: "JP", nombre: "Javier Pérez", detalle: "Nuevo cliente registrado", hora: "11:50" },
  { id: 3, inicial: "LC", nombre: "Lucía Cabrera", detalle: "Reserva confirmada · 2 personas", hora: "11:20" },
];
const platos = [
  { id: 1, nombre: "Picanha a la brasa", pedidos: 86, foto: "/photos/corte-especial.jpg" },
  { id: 2, nombre: "Parrillada mixta", pedidos: 72, foto: "/photos/parrillada.jpg" },
  { id: 3, nombre: "Costillar asado", pedidos: 54, foto: "/photos/carnes-parrilla.jpg" },
];

export default function Inicio() {
  return (
    <>
      <section className="portada">
        <span className="portada__etiqueta">PANEL PRINCIPAL · CONTROL DEL RESTAURANTE</span>
        <h1>Fuego Celestial</h1>
        <p>Bienvenido al centro de gestión. Aquí tienes el resumen de tu restaurante.</p>
        <div className="portada__acciones">
          <Link className="btn btn--claro" to="/reservas">Aceptar reservas</Link>
          <Link className="btn btn--contorno" to="/reportes">Ver reportes</Link>
        </div>
      </section>
      <section className="metricas">
        {indicadores.map((dato) => <Card key={dato.id} titulo={dato.titulo} valor={dato.valor} detalle={dato.detalle} icono={dato.icono} tono={dato.tono} />)}
      </section>
      <section className="dashboard-grid">
        <div className="panel">
          <div className="panel__encabezado"><div><span className="eyebrow">MOVIMIENTO RECIENTE</span><h2>Actividad del día</h2></div><Link to="/clientes">Ver clientes →</Link></div>
          {actividad.map((item) => <div className="actividad" key={item.id}><span className="avatar">{item.inicial}</span><div><strong>{item.nombre}</strong><small>{item.detalle}</small></div><time>{item.hora}</time></div>)}
        </div>
        <div className="panel panel--foto"><img src="/photos/parrillada.jpg" alt="Parrillada del restaurante" /><div><span className="eyebrow">DESTACADO DE LA SEMANA</span><h2>El sabor que nos distingue</h2><p>Controla tus ventas y los platos favoritos desde un solo lugar.</p><Link className="btn btn--primario" to="/reportes">Consultar reportes</Link></div></div>
      </section>
      <section className="panel">
        <div className="panel__encabezado"><div><span className="eyebrow">RENDIMIENTO</span><h2>Platos más solicitados</h2></div><Link to="/reportes">Ver análisis →</Link></div>
        <div className="platos-lista">{platos.map((plato) => <div className="plato-fila" key={plato.id}><img src={plato.foto} alt={plato.nombre} /><strong>{plato.nombre}</strong><span>{plato.pedidos} pedidos</span><div className="barra"><i style={{ width: `${plato.pedidos}%` }} /></div></div>)}</div>
      </section>
    </>
  );
}
