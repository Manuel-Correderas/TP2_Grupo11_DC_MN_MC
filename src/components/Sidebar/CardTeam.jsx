import { Link } from 'react-router-dom'
import styles from '../../views/HomePage.module.css'
import 'yet-another-react-lightbox/styles.css';


export default function CardTeam({ nombre, imagen, id, role }) {
  return (
    <div className={`${styles.memberCard}`}>
      <img src={imagen} alt={nombre} className={styles.memberAvatar} />
      <h3 className={styles.memberCardH3}>{nombre}</h3>
      <p className={styles.memberRoleTitle}>{role}</p>
      <Link to={`/miembros/${id}`} className={styles.memberPortfolioBtn}>
        Ver más
      </Link>
    </div>
  )
}

