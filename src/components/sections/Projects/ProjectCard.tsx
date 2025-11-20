// src/components/sections/Projects/ProjectCard.tsx
import React from "react";
import { useTranslation } from "react-i18next";
import type { Project } from "./projectsData";
import styles from "./ProjectCard.module.scss";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { t } = useTranslation("projects");

  return (
    <article className={styles.projectCard}>
      {/* Featured Badge */}
      {project.featured && (
        <div className={styles.projectCard__badge}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          <span>{t("labels.featured")}</span>
        </div>
      )}

      {/* Image */}
      <div className={styles.projectCard__image}>
        <img src={project.image} alt={t(`${project.titleKey}`)} />
        <div className={styles.projectCard__overlay}>
          <div className={styles.projectCard__links}>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectCard__link}
                aria-label={t("buttons.viewLive")}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                <span>{t("buttons.viewLive")}</span>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectCard__link}
                aria-label={t("buttons.viewCode")}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
                <span>{t("buttons.viewCode")}</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className={styles.projectCard__content}>
        <div className={styles.projectCard__header}>
          <h3 className={styles.projectCard__title}>
            {t(`${project.titleKey}`)}
          </h3>
          <span className={styles.projectCard__year}>{project.year}</span>
        </div>

        <p className={styles.projectCard__description}>
          {t(`${project.descriptionKey}`)}
        </p>

        {/* Technologies */}
        <div className={styles.projectCard__technologies}>
          {project.technologies.slice(0, 5).map((tech, index) => (
            <span key={index} className={styles.projectCard__tech}>
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className={styles.projectCard__tech}>
              +{project.technologies.length - 5}
            </span>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
