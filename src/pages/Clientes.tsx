
import { useState } from "react";
import Card from "../components/Card";

// 1. INTERFAZ DEL CLIENTE
interface Cliente {
  id: number;
  nombre: string;
  correo: string;
  telefono: string;
  visitas: number;
  estado: string;
}

// 2. DATOS INICIALES
const clientesIniciales: Cliente[] = [
  {
    id: 1,
    nombre: "María Rojas",
    correo: "maria.rojas@email.com",
    telefono: "7071-2345",
    visitas: 12,
    estado: "Frecuente",
  },
  {
    id: 2,
    nombre: "Javier Pérez",
    correo: "javier.perez@email.com",
    telefono: "7012-3456",
    visitas: 5,
    estado: "Activo",
  },
  {
    id: 3,
    nombre: "Lucía Cabrera",
    correo: "lucia.c@email.com",
    telefono: "7200-1234",
    visitas: 8,
    estado: "Frecuente",
  },
  {
    id: 4,
    nombre: "Andrés Flores",
    correo: "andres.f@email.com",
    telefono: "7654-3210",
    visitas: 2,
    estado: "Nuevo",
  },
  {
    id: 5,
    nombre: "Camila Vargas",
    correo: "camila.v@email.com",
    telefono: "7123-4567",
    visitas: 6,
    estado: "Activo",
  },
];

// 3. COMPONENTE PRINCIPAL
export default function Clientes() {

  // Estados
  const [clientes, setClientes] = useState<Cliente[]>(clientesIniciales);
  const [busqueda, setBusqueda] = useState("");

  // Datos del formulario
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");

  // Mostrar u ocultar formulario
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  // 4. BUSCAR CLIENTES
  const clientesFiltrados = clientes.filter((cliente) => {
    return (
      cliente.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      cliente.correo.toLowerCase().includes(busqueda.toLowerCase())
    );
  });

  // 5. AGREGAR NUEVO CLIENTE
  const agregarCliente = () => {
    if (nombre.trim() && correo.trim()) {

      const nuevoCliente: Cliente = {
        id: clientes.length + 1,
        nombre: nombre.trim(),
        correo: correo.trim(),
        telefono: telefono,
        visitas: 0,
        estado: "Nuevo",
      };

      setClientes([...clientes, nuevoCliente]);

      // Limpiar formulario
      setNombre("");
      setCorreo("");
      setTelefono("");

      // Ocultar formulario
      setMostrarFormulario(false);
    }
  };

  // 6. MOSTRAR INFORMACIÓN
  return (
    <>
      {/* ENCABEZADO */}
      <section className="encabezado-pagina">
        <span className="eyebrow">BASE DE DATOS</span>

        <h1>Gestión de clientes</h1>

        <p>
          Administra los registros, consulta información y añade
          nuevos clientes al sistema.
        </p>
      </section>

      {/* TARJETAS DE ESTADÍSTICAS */}
      <section className="metricas metricas--tres">

        <Card
          titulo="Total de clientes"
          valor={String(clientes.length)}
          detalle="Registros en el sistema"
          icono="♙"
        />

        <Card
          titulo="Clientes frecuentes"
          valor={String(
            clientes.filter((cliente) => cliente.estado === "Frecuente").length
          )}
          detalle="Más de 7 visitas"
          icono="★"
          tono="ambar"
        />

        <Card
          titulo="Nuevos clientes"
          valor={String(
            clientes.filter((cliente) => cliente.estado === "Nuevo").length
          )}
          detalle="Pendientes de fidelización"
          icono="＋"
          tono="rojo"
        />

      </section>

      {/* DIRECTORIO DE CLIENTES */}
      <section className="panel">

        <div className="panel__encabezado">

          <div>
            <h2>Directorio de clientes</h2>
            <p>Listado general de clientes registrados.</p>
          </div>

          <button
            className="btn btn--primario"
            onClick={() => setMostrarFormulario(!mostrarFormulario)}
          >
            ＋ Nuevo cliente
          </button>

        </div>

        {/* FORMULARIO PARA AGREGAR CLIENTES */}
        {mostrarFormulario && (
          <div className="formulario">

            <label>
              Nombre completo
              <input
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Nombre del cliente"
              />
            </label>

            <label>
              Correo electrónico
              <input
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                placeholder="correo@ejemplo.com"
              />
            </label>

            <label>
              Teléfono
              <input
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                placeholder="Número de contacto"
              />
            </label>

            <button
              className="btn btn--primario"
              onClick={agregarCliente}
            >
              Guardar cliente
            </button>

          </div>
        )}

        {/* BUSCADOR */}
        <input
          className="buscador"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          placeholder="Buscar por nombre o correo..."
        />

        {/* TABLA DE CLIENTES */}
        <div className="tabla-contenedor">

          <table>

            <thead>
              <tr>
                <th>Cliente</th>
                <th>Contacto</th>
                <th>Visitas</th>
                <th>Estado</th>
              </tr>
            </thead>

            <tbody>

              {clientesFiltrados.map((cliente) => (

                <tr key={cliente.id}>

                  <td>
                    <strong>{cliente.nombre}</strong>
                  </td>

                  <td>
                    {cliente.correo}
                    <small className="celda-secundaria">
                      {cliente.telefono}
                    </small>
                  </td>

                  <td>{cliente.visitas}</td>

                  <td>
                    <span
                      className={`estado estado--${cliente.estado.toLowerCase()}`}
                    >
                      {cliente.estado}
                    </span>
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </section>
    </>
  );
}
