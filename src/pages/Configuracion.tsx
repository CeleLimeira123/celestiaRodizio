
import { useState } from "react";

export default function Configuracion() {

  // 1. ESTADOS CON LOS DATOS DEL RESTAURANTE
  const [nombre, setNombre] = useState("Fuego Celestial");
  const [direccion, setDireccion] = useState(
    "Av. Principal #123, Zona Central"
  );
  const [telefono, setTelefono] = useState("+591 700 00000");
  const [correo, setCorreo] = useState(
    "administracion@fuegocelestial.com"
  );
  const [horario, setHorario] = useState("12:00 - 23:00");

  // 2. ESTADO PARA CONTROLAR EL GUARDADO
  const [guardado, setGuardado] = useState(false);

  // 3. MOSTRAR LA INTERFAZ
  return (
    <>

      {/* ENCABEZADO DE LA PÁGINA */}
      <section className="encabezado-pagina">

        <span className="eyebrow">
          PREFERENCIAS DEL SISTEMA
        </span>

        <h1>Configuración</h1>

        <p>
          Actualiza los datos generales y parámetros básicos
          de operación del restaurante.
        </p>

      </section>

      {/* INFORMACIÓN DEL RESTAURANTE */}
      <section className="panel configuracion-panel">

        <div className="panel__encabezado">

          <div>
            <h2>Información del restaurante</h2>

            <p>
              Estos datos identifican al negocio en el
              panel administrativo.
            </p>
          </div>

          <span className="etiqueta">
            Perfil del negocio
          </span>

        </div>

        {/* FORMULARIO DE CONFIGURACIÓN */}
        <div className="config-grid">

          {/* NOMBRE COMERCIAL */}
          <label>
            Nombre comercial

            <input
              value={nombre}
              onChange={(e) => {
                setNombre(e.target.value);
                setGuardado(false);
              }}
            />
          </label>

          {/* DIRECCIÓN */}
          <label>
            Dirección

            <input
              value={direccion}
              onChange={(e) => {
                setDireccion(e.target.value);
                setGuardado(false);
              }}
            />
          </label>

          {/* TELÉFONO */}
          <label>
            Teléfono de contacto

            <input
              value={telefono}
              onChange={(e) => {
                setTelefono(e.target.value);
                setGuardado(false);
              }}
            />
          </label>

          {/* CORREO */}
          <label>
            Correo administrativo

            <input
              type="email"
              value={correo}
              onChange={(e) => {
                setCorreo(e.target.value);
                setGuardado(false);
              }}
            />
          </label>

          {/* HORARIO */}
          <label>
            Horario de atención

            <input
              value={horario}
              onChange={(e) => {
                setHorario(e.target.value);
                setGuardado(false);
              }}
            />
          </label>

        </div>

        {/* BOTÓN PARA GUARDAR */}
        <div className="config-pie">

          <button
            className="btn btn--primario"
            onClick={() => setGuardado(true)}
          >
            Guardar cambios
          </button>

          {/* MENSAJE DE CONFIRMACIÓN */}
          {guardado && (
            <span className="aviso-ok">
              ✓ Cambios aplicados en esta sesión.
            </span>
          )}

        </div>

      </section>

      {/* ESTADO Y SEGURIDAD DEL SISTEMA */}
      <section className="panel seguridad">

        <span className="eyebrow">
          ACCESO Y CONTROL
        </span>

        <h2>Estado del sistema</h2>

        {/* ESTADO DEL PANEL */}
        <div className="ajuste">

          <div>
            <strong>Panel administrativo</strong>

            <p>
              Interfaz de gestión local para la práctica académica.
            </p>
          </div>

          <span className="estado estado--frecuente">
            Activo
          </span>

        </div>

        {/* ESTADO DEL ALMACENAMIENTO */}
        <div className="ajuste">

          <div>
            <strong>Almacenamiento</strong>

            <p>
              Los cambios de esta demostración se mantienen
              mientras la aplicación está abierta.
            </p>
          </div>

          <span className="estado estado--nuevo">
            Local
          </span>

        </div>

      </section>

    </>
  );
}
