// src/components/sections/Projects/Projects.tsx
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  projects,
  projectCategories,
  getProjectsByCategory,
} from "./projectsData";
import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.scss";
import type { ProjectCategory } from "./projectsData";

const Projects: React.FC = () => {
  const { t } = useTranslation("projects");

  // state types properly typed
  const [activeFilter, setActiveFilter] = useState<"all" | ProjectCategory>(
    "all"
  );
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleFilterChange = (category: "all" | ProjectCategory) => {
    setActiveFilter(category);
    setFilteredProjects(getProjectsByCategory(category));
  };

  return (
    <section className={styles.projects} id="projects">
      <div className={styles.projects__container}>
        {/* Section Header */}
        <div className={styles.projects__header}>
          <p className={styles.projects__subtitle}>{t("subtitle")}</p>
          <h2 className={styles.projects__title}>{t("title")}</h2>
          <p className={styles.projects__description}>{t("description")}</p>
        </div>

        {/* Filter Buttons */}
        <div className={styles.projects__filters}>
          {projectCategories.map((category) => (
            <button
              key={category.key}
              className={`${styles.projects__filter} ${
                activeFilter === category.key
                  ? styles["projects__filter--active"]
                  : ""
              }`}
              onClick={() =>
                handleFilterChange(category.key as "all" | ProjectCategory)
              }
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
              <h3>{t("empty.title")}</h3>
              <p>{t("empty.description")}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
