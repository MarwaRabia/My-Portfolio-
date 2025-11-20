// src/components/layout/Footer/Footer.tsx
import React, { type JSX } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Footer.module.scss";

interface QuickLink {
  key: string;
  href: string;
}

interface SocialLink {
  name: string;
  url: string;
  icon: JSX.Element;
  ariaLabel: string;
}

const quickLinks: QuickLink[] = [
  { key: "home", href: "#home" },
  { key: "about", href: "#about" },
  { key: "projects", href: "#projects" },
  { key: "skills", href: "#skills" },
  { key: "contact", href: "#contact" },
];

const Footer: React.FC = () => {
  const { t } = useTranslation("footer");
  const currentYear = new Date().getFullYear();

  const socialLinks: SocialLink[] = [
    {
      name: "GitHub",
      url: "https://github.com/MarwaRabia",
      ariaLabel: t("social.github"),
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/marwarabia/",
      ariaLabel: t("social.linkedin"),
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: "Email",
      url: "mailto:marwarabia369@gmail.com",
      ariaLabel: t("social.email"),
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
    },
  ];

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        {/* Main Content */}
        <div className={styles.footer__content}>
          {/* Brand Section */}
          <div className={styles.footer__brand}>
            <h3 className={styles.footer__logo}>
              <span className={styles.footer__logoText}>
                {t("quickLinks.home")}
              </span>
            </h3>
            <p className={styles.footer__description}>
              {t("contact.description")}
            </p>
            {/* Social Links */}
            <div className={styles.footer__social}>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.footer__socialLink}
                  aria-label={social.ariaLabel}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.footer__section}>
            <h4 className={styles.footer__title}>{t("quickLinks.title")}</h4>
            <ul className={styles.footer__links}>
              {quickLinks.map((link) => (
                <li key={link.key} className={styles.footer__linkItem}>
                  <a
                    href={link.href}
                    className={styles.footer__link}
                    onClick={(e) => handleLinkClick(e, link.href)}
                  >
                    {t(`quickLinks.${link.key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className={styles.footer__section}>
            <h4 className={styles.footer__title}>{t("contact.title")}</h4>
            <ul className={styles.footer__links}>
              <li className={styles.footer__linkItem}>
                <a
                  href="mailto:marwarabia369@gmail.com"
                  className={styles.footer__link}
                >
                  Gmail
                </a>
              </li>
              <li className={styles.footer__linkItem}>
                <a
                  href="https://github.com/MarwaRabia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.footer__link}
                >
                  GitHub
                </a>
              </li>
              <li className={styles.footer__linkItem}>
                <a
                  href="https://www.linkedin.com/in/marwarabia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.footer__link}
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.footer__bottom}>
          <p className={styles.footer__copyright}>
            {t("copyright", { year: currentYear })}
          </p>
          <p className={styles.footer__tagline}>{t("tagline")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
