import type { JSX } from "react";

interface CardProps {
  titulo: string;
  valor: string;
  detalle: string;
  icono: string;
  tono?: string;
}

function Card({ titulo, valor, detalle, icono, tono = "naranja" }: CardProps): JSX.Element {
  return (
    <article className={`card card--${tono}`}>
      <div className="card__cabecera">
        <span className="card__icono">{icono}</span>
        <span>{titulo}</span>
      </div>
      <strong className="card__valor">{valor}</strong>
      <p className="card__detalle">{detalle}</p>
    </article>
  );
}

export default Card;