import { Link, useLocation } from "react-router-dom";

const enlaces = [
  { to: "/", icono: "▦", texto: "Panel principal" },
  { to: "/clientes", icono: "♙", texto: "Clientes" },
  { to: "/reservas", icono: "▣", texto: "Reservas" },
  { to: "/menu", icono: "♨", texto: "Menú y platos" },
  { to: "/reportes", icono: "▤", texto: "Reportes" },
  { to: "/configuracion", icono: "⚙", texto: "Configuración" },
];

interface SidebarProps {
  abierto: boolean;
  onCerrar: () => void;
}

export default function Sidebar({ abierto, onCerrar }: SidebarProps) {
  const { pathname } = useLocation();
  return (
    <aside className={`sidebar${abierto ? " sidebar--abierto" : ""}`}>
      <p className="sidebar__titulo">GESTIÓN</p>
      <nav>
        {enlaces.map((enlace) => (
          <Link
            key={enlace.to}
            to={enlace.to}
            onClick={onCerrar}
            className={`sidebar__enlace${pathname === enlace.to ? " sidebar__enlace--activo" : ""}`}
          >
            <span>{enlace.icono}</span>{enlace.texto}
          </Link>
        ))}
      </nav>
      <div className="sidebar__bloque">
        <img src="/photos/administrador.jpg" alt="Equipo del restaurante" />
        <strong>Fuego Celestial</strong>
        <small>Restaurante · Rodízio</small>
      </div>
    </aside>
  );
}
