import { useState } from 'react';
import { Link } from 'react-router-dom';
import Lightbox from 'yet-another-react-lightbox';
import styles from '../../views/HomePage.module.css';
import 'yet-another-react-lightbox/styles.css';

export default function CardTeam({ nombre, imagen, id, role }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={styles.memberCard} onClick={() => setOpen(true)}>
        <img src={imagen} alt={nombre} className={styles.memberAvatar} />
        <h3 className={styles.memberCardH3}>{nombre}</h3>
        <p className={styles.memberRoleTitle}>{role}</p>
        <Link
          to={`/miembros/${id}`}
          className={styles.memberPortfolioBtn}
          onClick={(e) => e.stopPropagation()} // evita que el click en el link dispare el lightbox
        >
          Ver más
        </Link>
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[{ src: imagen }]}
      />
    </>
  );
}
