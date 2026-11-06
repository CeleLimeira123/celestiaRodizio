import { useState } from "react";

export default function Configuracion() {

  
  const [nombre, setNombre] = useState("Fuego Celestial");
  const [direccion, setDireccion] = useState(
    "Av. Principal #123, Zona Central"
  );
  const [telefono, setTelefono] = useState("+591 700 00000");
  const [correo, setCorreo] = useState(
    "administracion@fuegocelestial.com"
  );
  const [horario, setHorario] = useState("12:00 - 23:00");


  const [guardado, setGuardado] = useState(false);

 
  return (
    <>

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

        <div className="config-grid">

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

        <div className="config-pie">

          <button
            className="btn btn--primario"
            onClick={() => setGuardado(true)}
          >
            Guardar cambios
          </button>

          {guardado && (
            <span className="aviso-ok">
              ✓ Cambios aplicados en esta sesión.
            </span>
          )}

        </div>

      </section>

      <section className="panel seguridad">

        <span className="eyebrow">
          ACCESO Y CONTROL
        </span>

        <h2>Estado del sistema</h2>

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