// src/components/CardData.jsx
import { Link } from 'react-router-dom';
import './CardData.css';
import 'yet-another-react-lightbox/styles.css';


export default function CardData({ id, title, category, image, description }) {
  return (
    <div className="card-data">
      <img src={image} alt={title} className="card-data__img" />
      <div className="card-data__body">
        <h2 className="card-data__title">{title}</h2>
        <h4 className="card-data__subtitle">{category}</h4>

        {/* Descripción (se mostrará solo si hay texto) */}
        {description && (
          <p className="card-data__recipe">{description}</p>
        )}

        <Link to={`/receta/${id}`} className="card-data__btn">
          Ver más
        </Link>
      </div>
    </div>
  );
}
