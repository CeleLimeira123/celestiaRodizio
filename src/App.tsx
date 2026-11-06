import { useState } from "react";
import { Outlet, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

import Inicio from "./pages/Inicio";
import Clientes from "./pages/Clientes";
import Reservas from "./pages/Reservas";
import Menu from "./pages/Menu";
import Reportes from "./pages/Reportes";
import Configuracion from "./pages/Configuracion";
import NotFound from "./pages/NotFound";

import { restaurante } from "./data/restaurante";

function Layout() {
  const [tema, setTema] = useState<"claro" | "oscuro">("claro");
  const [menuAbierto, setMenuAbierto] = useState(false);

  function cambiarTema() {
    if (tema === "claro") {
      setTema("oscuro");
      document.documentElement.dataset.tema = "oscuro";
    } else {
      setTema("claro");
      document.documentElement.dataset.tema = "claro";
    }
  }

  return (
    <div className="app">

      <Navbar
        nombre={restaurante.nombre}
        tema={tema}
        onAlternarTema={cambiarTema}
        menuAbierto={menuAbierto}
        onAlternarMenu={() => setMenuAbierto(!menuAbierto)}
      />

      <div className="cuerpo">

        <Sidebar
          abierto={menuAbierto}
          onCerrar={() => setMenuAbierto(false)}
        />

        {menuAbierto && (
          <div
            className="velo"
            onClick={() => setMenuAbierto(false)}
          />
        )}

        <main className="contenido">
          <Outlet />
        </main>

      </div>

      <Footer />

    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>

        <Route path="/" element={<Inicio />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/reservas" element={<Reservas />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reportes" element={<Reportes />} />
        <Route path="/configuracion" element={<Configuracion />} />

        <Route path="*" element={<NotFound />} />

      </Route>
    </Routes>
  );
}

