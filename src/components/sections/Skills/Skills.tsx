// src/components/sections/Skills/Skills.tsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SkillCard from './SkillCard';
import { getSkillsGroupedByCategory, type SkillCategory } from './skillsData';
import styles from './Skills.module.scss';

const Skills: React.FC = () => {
  const { t } = useTranslation('skills');
  const [activeCategory, setActiveCategory] = useState<SkillCategory | 'all'>('all');
  const skillsGrouped = getSkillsGroupedByCategory();

  // Filter skills based on active category
  const filteredSkills = activeCategory === 'all' 
    ? skillsGrouped.flatMap(group => group.skills)
    : skillsGrouped.find(group => group.key === activeCategory)?.skills || [];

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.skills__container}>
        {/* Header */}
        <div className={styles.skills__header}>
          <h2 className={styles.skills__title}>
            {t('title')}
          </h2>
          <p className={styles.skills__subtitle}>
            {t('subtitle')}
          </p>
          <p className={styles.skills__description}>
            {t('description')}
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className={styles.skills__filters}>
          <button
            className={`${styles.skills__filter} ${
              activeCategory === 'all' ? styles['skills__filter--active'] : ''
            }`}
            onClick={() => setActiveCategory('all')}
            aria-pressed={activeCategory === 'all'}
          >
            <span>{t('filters.all')}</span>
            <span className={styles.skills__filterCount}>
              {skillsGrouped.reduce((acc, group) => acc + group.skills.length, 0)}
            </span>
          </button>

          {skillsGrouped.map((category) => (
            <button
              key={category.key}
              className={`${styles.skills__filter} ${
                activeCategory === category.key ? styles['skills__filter--active'] : ''
              }`}
              onClick={() => setActiveCategory(category.key)}
              style={{ '--category-color': category.color } as React.CSSProperties}
              aria-pressed={activeCategory === category.key}
            >
              <span>{t(`filters.${category.labelKey}`)}</span>
              <span className={styles.skills__filterCount}>
                {category.skills.length}
              </span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div 
          className={styles.skills__grid}
          role="list"
          aria-label={t('title')}
        >
          {filteredSkills.map((skill, index) => (
            <div 
              key={skill.name}
              className={styles.skills__item}
              style={{
                '--item-index': index,
              } as React.CSSProperties}
              role="listitem"
            >
              <SkillCard skill={skill} />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredSkills.length === 0 && (
          <div className={styles.skills__empty}>
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
    </section>
  );
};

export default Skills;