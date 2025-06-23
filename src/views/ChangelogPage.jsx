// src/views/ChangelogPage.jsx
import React from 'react';
import styles from './ChangelogPage.module.css';

function ChangelogPage() {
  const today = new Date('2025-06-23');
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  const twoDaysAgo = new Date(today);
  twoDaysAgo.setDate(today.getDate() - 2);

  const changelogData = [
    {
      id: '1',
      version: 'v1.0.0',
      date: '2025-05-25',
      author: 'María Nazar',
      type: 'new',
      description: 'Lanzamiento inicial del proyecto con la configuración de la estructura base (MVC y React Router) y funcionalidades principales.',
      impact: 'Alta - Base fundamental del proyecto'
    },
    {
      id: '2',
      version: 'v1.1.0',
      date: '2025-05-27',
      author: 'María Nazar',
      type: 'improvement',
      description: 'Implementación del layout principal, navegación entre secciones y mejora de la experiencia de usuario.',
      impact: 'Media - Mejora la estructura y la usabilidad'
    },
    {
      id: '3',
      version: 'v1.1.1',
      date: '2025-05-30',
      author: 'Manuel Correderas',
      type: 'update',
      description: 'Se incorporaron las APIs de países para trabajar con datos externos, expandiendo la información del proyecto.',
      impact: 'Baja - Expansión de funcionalidades y uso de datos en tiempo real'
    },
    {
      id: '4',
      version: 'v1.2.0',
      date: twoDaysAgo.toISOString().split('T')[0],
      author: 'Daniel Coria',
      type: 'improvement',
      description: 'Mejora del diseño y la presentación de cada perfil de miembro, unificando la estética con la página principal en una nueva estructura de tarjeta.',
      impact: 'Media - Mejora significativa en la experiencia de usuario y coherencia visual'
    },
    {
      id: '5',
      version: 'v1.2.1',
      date: yesterday.toISOString().split('T')[0],
      author: 'Daniel Coria',
      type: 'update',
      description: 'Correcciones y optimizaciones para el despliegue en Vercel y GitHub Pages.',
      impact: 'Baja - Mejora la estabilidad de la plataforma y el proceso de despliegue'
    },
    {
      id: '6',
      version: 'v1.3.0',
      date: today.toISOString().split('T')[0],
      author: 'Manuel Correderas',
      type: 'improvement',
      description: 'Se agregaron animaciones suaves, hover en tarjetas, búsqueda local en JSON, paginación de la API externa y galería de imágenes con lightbox.',
      impact: 'Alta - Mejora visual, de navegación y cumplimiento de los criterios del TP1-TP2'
    }
  ].sort((a, b) => new Date(b.date) - new Date(a.date));

  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  const formatDate = (dateStr) =>
    new Date(dateStr).toLocaleDateString('es-AR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

  return (
    <div className={styles['changelog-container']}>
      <header className={styles['changelog-header']}>
        <h1 className={styles['changelog-title']}>Bitácora del Proyecto (Changelog)</h1>
        <p className={styles['changelog-subtitle']}>
          Esta sección documentará los cambios, actualizaciones y progreso del proyecto a lo largo del tiempo.
        </p>
      </header>

      <section className={styles['changelog-sections-grid']}>
        {changelogData.map(({ id, version, date, author, type, description, impact }) => (
          <div key={id} className={styles['version-entry']}>
            <div className={styles['version-header']}>
              <span className={styles['version-number']}>{version}</span>
              <span className={styles['version-date']}>{formatDate(date)}</span>
            </div>

            <p className={styles['version-author']}>Autor: {author}</p>

            <span className={`${styles['change-type-tag']} ${styles[type]}`}>
              {capitalize(type)}
            </span>

            <p className={styles['version-description']}>{description}</p>

            {impact && (
              <p className={styles['version-impact']}>
                <strong>Impacto:</strong> {impact}
              </p>
            )}
          </div>
        ))}
      </section>
    </div>
  );
}

export default ChangelogPage;
