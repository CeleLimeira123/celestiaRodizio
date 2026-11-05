import Card from "../components/Card";
const ventas = [{ dia: "Lun", valor: 48 }, { dia: "Mar", valor: 65 }, { dia: "Mié", valor: 52 }, { dia: "Jue", valor: 78 }, { dia: "Vie", valor: 88 }, { dia: "Sáb", valor: 100 }, { dia: "Dom", valor: 72 }];
const categorias = [{ nombre: "Carnes a la brasa", porcentaje: 68 }, { nombre: "Bebidas", porcentaje: 18 }, { nombre: "Postres", porcentaje: 9 }, { nombre: "Acompañamientos", porcentaje: 5 }];
export default function Reportes() {
  return (
    <>
      <section className="encabezado-pagina"><span className="eyebrow">ANÁLISIS DEL NEGOCIO</span><h1>Reportes y estadísticas</h1><p>Indicadores de rendimiento para evaluar las ventas y la operación del restaurante.</p></section>
      <section className="metricas">
        <Card titulo="Ventas totales" valor="Bs 28.450" detalle="Periodo mensual" icono="Bs" />
        <Card titulo="Pedidos atendidos" valor="486" detalle="Este mes" icono="▤" tono="rojo" />
        <Card titulo="Ticket promedio" valor="Bs 58,54" detalle="Por pedido" icono="◉" tono="ambar" />
        <Card titulo="Satisfacción" valor="94%" detalle="Valoración promedio" icono="★" tono="vino" />
      </section>
      <section className="dashboard-grid">
        <div className="panel"><div className="panel__encabezado"><div><span className="eyebrow">VENTAS SEMANALES</span><h2>Ingresos por día</h2></div><span className="etiqueta">Últimos 7 días</span></div><div className="grafico">{ventas.map((dia) => <div className="grafico__columna" key={dia.dia}><strong>{dia.valor}%</strong><div className="grafico__pista"><i style={{ height: `${dia.valor}%` }} /></div><small>{dia.dia}</small></div>)}</div></div>
        <div className="panel"><span className="eyebrow">DISTRIBUCIÓN</span><h2>Ventas por categoría</h2><div className="categorias">{categorias.map((cat) => <div key={cat.nombre}><div><strong>{cat.nombre}</strong><span>{cat.porcentaje}%</span></div><div className="barra"><i style={{ width: `${cat.porcentaje}%` }} /></div></div>)}</div></div>
      </section>
      <section className="panel"><span className="eyebrow">LECTURA DE RESULTADOS</span><h2>Resumen administrativo</h2><p>Las carnes a la brasa representan la mayor parte de las ventas. El sábado registra el nivel más alto de actividad, por lo que se recomienda reforzar el personal de salón y cocina durante esa jornada.</p><div className="nota"><strong>Recomendación:</strong> revisar el inventario de cortes premium antes del fin de semana y mantener seguimiento a los pedidos de mayor demanda.</div></section>

      <section className="panel ranking-panel">
        <div className="panel__encabezado">
          <div><span className="eyebrow">RENDIMIENTO DEL EQUIPO</span><h2>Ranking de cocina y pastelería</h2><p>Reconocimiento al equipo según los platos con mayor salida registrados en este reporte de demostración.</p></div>
          <span className="etiqueta">Top del periodo</span>
        </div>
        <div className="ranking-grid">
          <article className="ranking-card">
            <div className="ranking-card__foto"><img src="/photos/chef.jpg" alt="Chef principal de Fuego Celestial" /><span>🥇 Puesto 1</span></div>
            <div className="ranking-card__datos">
              <span className="eyebrow">CHEF · PARRILLA</span>
              <h3>Rodrigo Mendoza</h3>
              <p className="ranking-card__plato">Plato más vendido: <strong>Picanha al espeto</strong></p>
              <div className="ranking-card__venta"><strong>86</strong><span>porciones registradas</span></div>
              <small>Especialidad: cortes a las brasas y punto de cocción.</small>
            </div>
          </article>
          <article className="ranking-card">
            <div className="ranking-card__foto"><img src="/photos/repostera.jpg" alt="Pastelera de Fuego Celestial" /><span>🥈 Puesto 2</span></div>
            <div className="ranking-card__datos">
              <span className="eyebrow">PASTELERÍA · POSTRES</span>
              <h3>Valeria Rocha</h3>
              <p className="ranking-card__plato">Plato más vendido: <strong>Tarta de frutas del bosque</strong></p>
              <div className="ranking-card__venta"><strong>42</strong><span>porciones registradas</span></div>
              <small>Especialidad: tartas, postres individuales y decoración.</small>
            </div>
          </article>
        </div>
        <p className="ranking-aclaracion">Los nombres y cantidades del ranking son datos de ejemplo para la presentación académica; pueden reemplazarse por los registros reales de ventas del restaurante.</p>
      </section>
    </>
  );
}
