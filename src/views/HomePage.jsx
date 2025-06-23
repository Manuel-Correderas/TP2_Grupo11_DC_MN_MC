import React, { useState } from 'react';
import CardTeam from '../components/Sidebar/CardTeam';
import { teamMembersDetails } from '../data/teamMembersDetails';
import styles from '../views/HomePage.module.css';

export default function HomePage() {
  const [busqueda, setBusqueda] = useState('');

  const miembrosFiltrados = teamMembersDetails.filter((member) => {
    const texto = busqueda.toLowerCase();

    return (
      member.fullName.toLowerCase().includes(texto) ||
      member.role.toLowerCase().includes(texto) ||
      member.bio?.toLowerCase().includes(texto) ||
      member.skills?.some(skill => skill.toLowerCase().includes(texto)) ||
      member.projects?.some(project =>
        project.name.toLowerCase().includes(texto) ||
        project.description.toLowerCase().includes(texto)
      ) ||
      member.technologies?.some(tech =>
        tech.name.toLowerCase().includes(texto)
      )
    );
  });

  return (
    <section className={styles.homePageContainer}>
      <div className={styles.teamSectionContainer}>
        <h2 className={styles.teamSectionTitle}>Nuestro Equipo:</h2>

        <input
          type="text"
          placeholder="Buscar por nombre, rol, tecnología..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className={styles.searchInput}
        />

        <div className={styles.teamMembersGrid}>
          {miembrosFiltrados.map((member) => (
            <CardTeam
              key={member.id}
              id={member.id}
              nombre={member.fullName}
              imagen={member.imageUrl}
              role={member.role}
            />
          ))}
        </div>
      </div>

      {/* Misión, Visión y Valores (sin cambios) */}
      <div className={styles.missionVisionValuesSection}>
        <h2 className={styles.sectionTitle}>Nuestra Esencia</h2>
        <div className={styles.valuesGrid}>
          <div className={styles.valueCard}>
            <h3 className={styles.valueCardTitle}>Misión</h3>
            <p className={styles.valueCardText}>
              Desarrollar soluciones tecnológicas innovadoras para impulsar el crecimiento y la eficiencia.
            </p>
          </div>
          <div className={styles.valueCard}>
            <h3 className={styles.valueCardTitle}>Visión</h3>
            <p className={styles.valueCardText}>
              Ser líderes en desarrollo de software, reconocidos por nuestra excelencia.
            </p>
          </div>
          <div className={styles.valueCard}>
            <h3 className={styles.valueCardTitle}>Valores</h3>
            <p className={styles.valueCardText}>
              Nos guían la Innovación, Colaboración, Integridad, Calidad y Pasión.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
