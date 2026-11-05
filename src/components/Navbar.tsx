import { Link } from "react-router-dom";

interface NavbarProps {
  nombre: string;
  tema: "claro" | "oscuro";
  onAlternarTema: () => void;
  menuAbierto: boolean;
  onAlternarMenu: () => void;
}

export default function Navbar({ nombre, tema, onAlternarTema, menuAbierto, onAlternarMenu }: NavbarProps) {
  return (
    <header className="navbar">
      <div className="navbar__izquierda">
        <button
          className="navbar__hamburguesa"
          type="button"
          onClick={onAlternarMenu}
          aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuAbierto}
        >
          {menuAbierto ? "✕" : "☰"}
        </button>
        <Link className="navbar__marca" to="/">
          <span className="navbar__logo">🔥</span>
          <span>{nombre}<small> PANEL ADMINISTRATIVO</small></span>
        </Link>
      </div>
      <div className="navbar__acciones">
        <span className="navbar__estado"><i /> Sistema operativo</span>
        <button className="btn btn--icono" type="button" onClick={onAlternarTema} aria-label="Cambiar tema">
          {tema === "claro" ? "☾" : "☀"}
        </button>
        <div className="navbar__usuario"><span>AD</span><div><strong>Administrador</strong><small>Gerencia</small></div></div>
      </div>
    </header>
  );
}
