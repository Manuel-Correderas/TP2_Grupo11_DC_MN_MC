// src/views/MemberPage.jsx
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { teamMembersDetails } from '../data/teamMembersDetails';
import styles from './MemberPage.module.css';

export default function MemberPage() {
  const { name } = useParams();
  const slug = decodeURIComponent(name).toLowerCase();
  const member = teamMembersDetails.find(m => m.id === slug);

  if (!member) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className={styles['member-profile-container']}>
      <div className={styles['member-header']}>
        <img
          src={member.imageUrl}
          alt={member.fullName}
          className={styles['member-profile-img']}
        />
        <div className={styles['member-header-info']}>
          <h1>{member.fullName}</h1>
          <p className={styles['member-role']}>{member.role}</p>
          <p className={styles['member-bio']}>{member.bio}</p>
          <a
            href={member.projects[0].link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles['member-portfolio-btn']}
          >
            Visita mi portfolio →
          </a>
        </div>
      </div>

      <div className={styles['profile-section']}>
        <h2 className={styles['section-title']}>Habilidades</h2>
        <div className={styles['skills-grid']}>
          {member.skills.map((skill, i) => (
            <div key={i} className={styles['skill-pill']}>{skill}</div>
          ))}
        </div>
      </div>

      <div className={styles['profile-section']}>
        <h2 className={styles['section-title']}>Proyectos</h2>
        <div className={styles['projects-grid']}>
          {member.projects.map((project, i) => (
            <div key={i} className={styles['project-card']}>
              <h3 className={styles['project-title']}>{project.name}</h3>
              <p className={styles['project-description']}>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles['project-button']}
              >
                Ver proyecto
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className={styles['profile-section']}>
        <h2 className={styles['section-title']}>Tecnologías</h2>
        <div className={styles['technologies-grid']}>
          {member.technologies.map((tech, i) => (
            <div key={i} className={styles['tech-item']}>
              <img src={tech.icon} alt={tech.name} className={styles['tech-icon-img']} />
              <span className={styles['tech-name']}>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
