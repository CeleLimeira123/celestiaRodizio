# Fuego Celestial — Sistema administrativo de restaurante

Aplicación SPA académica desarrollada con **React, TypeScript, React Router y CSS externo**. La temática elegida es restaurante tipo rodízio y el enfoque es exclusivamente administrativo.

## Requisitos del enunciado

- Layout general con **Navbar, Sidebar y Footer**.
- Páginas: **Inicio, Clientes, Reservas, Menú, Reportes y Configuración** (más una 404 personalizada).
- Cuatro componentes propios: `Navbar.tsx`, `Sidebar.tsx`, `Footer.tsx` y `Card.tsx`.
- Props utilizadas en componentes reutilizables.
- Datos dinámicos mostrados mediante arrays y `map()`.
- Estilos externos centralizados en `src/App.css`.
- Estructura organizada en `components/`, `pages/` y `data/`.
- React Router para navegar entre las páginas.
- Modo oscuro e interfaz adaptable a celular, con menú ☰ desplegable en pantallas pequeñas.

## Nombre e identidad visual

**Fuego Celestial**. La paleta indicada en la referencia se aplica como colores principales:

| Color | HEX |
|---|---|
| Durazno | `#FBBA72` |
| Naranja | `#CA5310` |
| Naranja tostado | `#BB4D00` |
| Rojo ladrillo | `#8F250C` |
| Marrón oscuro | `#691E06` |

Las fotografías de `comidaRodizio.zip` se copiaron a `public/photos/` y se utilizan en el panel.

## Páginas

| Ruta | Página | Función administrativa |
|---|---|---|
| `/` | Inicio | Indicadores generales, actividad reciente y platos destacados |
| `/clientes` | Clientes | Listado, búsqueda y registro de clientes |
| `/reservas` | Reservas | Aceptar o rechazar solicitudes de reserva, con filtros por estado |
| `/menu` | Menú y platos | Catálogo administrativo con fotografías, descripciones, categorías y precios |
| `/reportes` | Reportes | Resumen de ventas, pedidos y categorías |
| `/configuracion` | Configuración | Datos generales del restaurante y parámetros básicos |
| `*` | No encontrada | Página 404 |

## Ejecutar el proyecto

```bash
npm install
npm run dev
```

Para comprobar la compilación de producción:

```bash
npm run build
```

## Estructura principal

```text
src/
  components/
    Navbar.tsx
    Sidebar.tsx
    Footer.tsx
    Card.tsx
  pages/
    Inicio.tsx
    Clientes.tsx
    Reportes.tsx
    Configuracion.tsx
    NotFound.tsx
  data/
  App.tsx
  App.css
```

## Alcance de la demostración

Los registros de clientes y la configuración son datos de demostración administrados en el estado de React. No hay conexión a un servidor ni base de datos; los cambios se mantienen durante la sesión abierta y se reinician al recargar.

El código de las pantallas principales se mantiene deliberadamente sencillo: componentes funcionales, `interface`, `useState`, props, arrays, `map()`, `filter()`, `Link`, `Routes` y `Route`.
