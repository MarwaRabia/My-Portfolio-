// src/i18n/config.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import translation files
import enCommon from "../locales/en/common.json";
import enHero from "../locales/en/hero.json";
import enAbout from "../locales/en/about.json";
import enProjects from "../locales/en/projects.json";
import enSkills from "../locales/en/skills.json";
import enContact from "../locales/en/contact.json";
import enNavbar from "../locales/en/navbar.json";
import enFooter from "../locales/en/footer.json";

import arCommon from "../locales/ar/common.json";
import arHero from "../locales/ar/hero.json";
import arAbout from "../locales/ar/about.json";
import arProjects from "../locales/ar/projects.json";
import arSkills from "../locales/ar/skills.json";
import arContact from "../locales/ar/contact.json";
import arNavbar from "../locales/ar/navbar.json";
import arFooter from "../locales/ar/footer.json";

// Translation resources
const resources = {
  en: {
    navbar: enNavbar,
    common: enCommon,
    hero: enHero,
    about: enAbout,
    projects: enProjects,
    skills: enSkills,
    contact: enContact,
    footer: enFooter,
  },
  ar: {
    navbar: arNavbar,
    common: arCommon,
    hero: arHero,
    about: arAbout,
    projects: arProjects,
    skills: arSkills,
    contact: arContact,
    footer: arFooter,
  },
};

i18n
  // Detect user language
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next
  .use(initReactI18next)
  // Initialize i18next
  .init({
    resources,
    fallbackLng: "en",
    defaultNS: "common",

    // Language detection options
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
      lookupLocalStorage: "i18nextLng",
    },

    interpolation: {
      escapeValue: false, // React already escapes values
    },

    react: {
      useSuspense: true,
    },
  });

// Update document direction and lang attribute when language changes
i18n.on("languageChanged", (lng) => {
  document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
  document.documentElement.lang = lng;
});

export default i18n;
