// src/components/sections/Projects/Projects.tsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { projects, projectCategories, getProjectsByCategory } from './projectsData';
import ProjectCard from './ProjectCard';
import styles from './Projects.module.scss';

const Projects: React.FC = () => {
  const { t } = useTranslation('projects');
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleFilterChange = (category: string) => {
    setActiveFilter(category);
    setFilteredProjects(getProjectsByCategory(category));
  };

  return (
    <section className={styles.projects} id="projects">
      <div className={styles.projects__container}>
        {/* Section Header */}
        <div className={styles.projects__header}>
          <p className={styles.projects__subtitle}>{t('subtitle')}</p>
          <h2 className={styles.projects__title}>{t('title')}</h2>
          <p className={styles.projects__description}>{t('description')}</p>
        </div>

        {/* Filter Buttons */}
        <div className={styles.projects__filters}>
          {projectCategories.map((category) => (
            <button
              key={category.key}
              className={`${styles.projects__filter} ${
                activeFilter === category.key ? styles['projects__filter--active'] : ''
              }`}
              onClick={() => handleFilterChange(category.key)}
            >
              {t(`filters.${category.labelKey}`)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className={styles.projects__grid}>
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            <div className={styles.projects__empty}>
              <svg
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              <h3>{t('empty.title')}</h3>
              <p>{t('empty.description')}</p>
            </div>
          )}
        </div>

        {/* View All Button (Optional) */}
        {/* <div className={styles.projects__cta}>
          <button className={styles.projects__button}>
            {t('buttons.viewAll')}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;