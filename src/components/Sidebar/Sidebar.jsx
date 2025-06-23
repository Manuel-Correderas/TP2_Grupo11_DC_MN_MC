// src/components/Sidebar/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Sidebar.module.css';
import logoGrupo from '../../assets/icons/logo_grupo.svg'; // Asegúrate de que la ruta sea correcta. Si no tienes este logo, puedes omitir la línea y el <img>


const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logoContainer}>
        {/* Si no tienes logoGrupo, elimina la siguiente línea */}
        <img src={logoGrupo} alt="Logo del Grupo" className={styles.logo} />
      </div>
      <nav>
        <ul className={styles.navList}>
          <li><Link to="/" className={styles.navLink}>Presentación</Link></li>
          <li><Link to="/miembros/daniel-coria"   className={styles.navLink}>Daniel Coria</Link></li>
          <li><Link to="/miembros/manuel-correderas" className={styles.navLink}>Manuel Correderas</Link></li>
          <li><Link to="/miembros/maria-nazar"     className={styles.navLink}>María Nazar</Link></li>
          <li><Link to="paises-carrusel" className={styles.navLink}>Datos JSON</Link></li>
          <li><Link to="/api-recetas" className={styles.navLink}>Datos API</Link></li>
          <li><Link to="/bitacora" className={styles.navLink}>Bitácora</Link></li>
        </ul>
      </nav>
    </aside>
  );
};
export default Sidebar;