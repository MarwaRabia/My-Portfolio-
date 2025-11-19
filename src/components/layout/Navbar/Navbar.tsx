import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../../common/LanguageSwitcher/LanguageSwitcher";
import styles from "./Navbar.module.scss";

interface NavLink {
  key: string;
  href: string;
}

const navLinks: NavLink[] = [
  { key: "home", href: "#home" },
  { key: "about", href: "#about" },
  { key: "projects", href: "#projects" },
  { key: "skills", href: "#skills" },
  { key: "contact", href: "#contact" },
];

const Navbar: React.FC = () => {
  const { t } = useTranslation("navbar");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navLinks.map((link) => link.key);
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.querySelector(`.${styles.navbar}`);
      if (isMenuOpen && nav && !nav.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);

    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`${styles.navbar} ${
        isScrolled ? styles["navbar--scrolled"] : ""
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className={styles.navbar__container}>
        {/* Logo */}
        <a
          href="#home"
          className={styles.navbar__logo}
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#home");
          }}
          aria-label={t("logo")}
        >
          <span className={styles.navbar__logoText}>{t("logo")}</span>
        </a>

        {/* Desktop Navigation */}
        <ul className={styles.navbar__menu}>
          {navLinks.map((link) => (
            <li key={link.key} className={styles.navbar__item}>
              <a
                href={link.href}
                className={`${styles.navbar__link} ${
                  activeSection === link.key
                    ? styles["navbar__link--active"]
                    : ""
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
              >
                {t(`nav.${link.key}`)}
              </a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className={styles.navbar__actions}>
          {/* Resume Button - Desktop Only */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.navbar__resume}
            aria-label={t("actions.resume")}
          >
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
            <span>{t("actions.resume")}</span>
          </a>

          {/* Language Switcher - Desktop Only */}
          <div className={styles.navbar__languageSwitcher}>
            <LanguageSwitcher />
          </div>

          {/* Hamburger Button */}
          <button
            className={`${styles.navbar__hamburger} ${
              isMenuOpen ? styles["navbar__hamburger--open"] : ""
            }`}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? t("actions.closeMenu") : t("actions.menu")}
            aria-expanded={isMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${styles.navbar__mobileMenu} ${
            isMenuOpen ? styles["navbar__mobileMenu--open"] : ""
          }`}
        >
          <ul className={styles.navbar__mobileList}>
            {navLinks.map((link) => (
              <li key={link.key} className={styles.navbar__mobileItem}>
                <a
                  href={link.href}
                  className={`${styles.navbar__mobileLink} ${
                    activeSection === link.key
                      ? styles["navbar__mobileLink--active"]
                      : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                >
                  {t(`nav.${link.key}`)}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Actions */}
          <div className={styles.navbar__mobileActions}>
            {/* Language Switcher - Mobile */}
            <div className={styles.navbar__mobileLanguage}>
              <LanguageSwitcher />
            </div>

            {/* Resume Button - Mobile */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.navbar__mobileResume}
            >
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
              <span>{t("actions.resume")}</span>
            </a>
          </div>
        </div>

        {/* Overlay */}
        {isMenuOpen && (
          <div
            className={styles.navbar__overlay}
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
