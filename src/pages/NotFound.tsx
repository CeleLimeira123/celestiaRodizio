
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="no-encontrada">
      <span>🔥</span>

      <h1>404</h1>

      <h2>Página no encontrada</h2>

      <p>
        La sección que buscas no está disponible
        en el panel administrativo.
      </p>

      <Link
        className="btn btn--primario"
        to="/"
      >
        Volver al panel principal
      </Link>
    </section>
  );
}
