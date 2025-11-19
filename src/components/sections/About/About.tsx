// src/components/sections/About/About.tsx
import React, { type JSX } from "react";
import { useTranslation } from "react-i18next";
import { aboutConfig } from "./aboutData";
import styles from "./About.module.scss";

const About: React.FC = () => {
  const { t } = useTranslation("about");

// const handleOpenCV = () => {
//   const link = document.createElement("a");
//   link.href = "https://drive.google.com/file/d/1qWIClBzBcxUyOKixirlTMs5T7L8nGZUB/view?usp=sharing"; // رابط الملف
//   link.target = "_blank"; // يفتح في تبويب جديد
//   link.rel = "noopener noreferrer"; // للأمان
//   link.click();
// };



const handleDownloadCV = () => {
  const link = document.createElement("a");
  link.href = "https://drive.google.com/uc?export=download&id=1qWIClBzBcxUyOKixirlTMs5T7L8nGZUB"; // رابط مباشر للتحميل
  link.download = "MarwaRabiaCV.pdf"; 
  link.click();
};

  const handleNavClick = (href: string) => {
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={styles.about} id="about">
      <div className={styles.about__container}>
        {/* Section Header */}
        <div className={styles.about__header}>
          <p className={styles.about__subtitle}>{t("subtitle")}</p>
          <h2 className={styles.about__title}>{t("title")}</h2>
        </div>

        <div className={styles.about__content}>
          {/* Image Side */}
          <div className={styles.about__imageWrapper}>
            <div className={styles.about__imageContainer}>
              <img
                src={aboutConfig.imageUrl}
                alt="Developer working"
                className={styles.about__image}
              />
              <div className={styles.about__imageBg}></div>
            </div>
          </div>

          {/* Text Side */}
          <div className={styles.about__text}>
            <h3 className={styles.about__intro}>{t("intro")}</h3>

            <p className={styles.about__paragraph}>{t("paragraphs.p1")}</p>
            <p className={styles.about__paragraph}>{t("paragraphs.p2")}</p>

            {/* CTA Buttons */}
            <div className={styles.about__cta}>
              <button className={`${styles.btn} ${styles["btn--primary"]}`}
              onClick={handleDownloadCV}>
                <Icon name="download" />
                <span>{t("cta.downloadCV")}</span>
              </button>
              <button
                className={`${styles.btn} ${styles["btn--secondary"]}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#contact");
                }}
              >
                <Icon name="mail" />
                <span>{t("cta.contact")}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        {/* <div className={styles.about__stats}>
          {aboutConfig.stats.map((stat, index) => (
            <div key={index} className={styles.stat}>
              <div className={styles.stat__icon}>
                <Icon name={stat.icon} />
              </div>
              <div className={styles.stat__content}>
                <h4 className={styles.stat__value}> {stat.value} </h4>
                <p className={styles.stat__label}>
                  {t(`stats.${stat.labelKey}.label`)}
                </p>
              </div>
            </div>
          ))}
        </div> */}

        {/* What I Do */}
        {/* <div className={styles.about__interests}>
          <h3 className={styles.about__interestsTitle}>
            {t("interests.title")}
          </h3>
          <div className={styles.about__interestsGrid}>
            {aboutConfig.interests.map((interest, index) => (
              <div
                key={index}
                className={styles.interestCard}
                style={
                  { "--card-color": interest.color } as React.CSSProperties
                }
              >
                <div className={styles.interestCard__icon}>
                  <Icon name={interest.icon} />
                </div>
                <h4 className={styles.interestCard__title}>
                  {t(`interests.${interest.titleKey}`)}
                </h4>
                <p className={styles.interestCard__description}>
                  {t(`interests.${interest.descriptionKey}`)}
                </p>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

// Icon Component
interface IconProps {
  name: string;
}

const Icon: React.FC<IconProps> = ({ name }) => {
  const icons: Record<string, JSX.Element> = {
    download: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
    ),
    mail: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    calendar: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    code: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    users: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    coffee: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
    monitor: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    palette: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="13.5" cy="6.5" r=".5" />
        <circle cx="17.5" cy="10.5" r=".5" />
        <circle cx="8.5" cy="7.5" r=".5" />
        <circle cx="6.5" cy="12.5" r=".5" />
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
      </svg>
    ),
    lightbulb: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <line x1="9" y1="18" x2="15" y2="18" />
        <line x1="10" y1="22" x2="14" y2="22" />
        <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
      </svg>
    ),
    book: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  };

  return icons[name] || null;
};

export default About;
