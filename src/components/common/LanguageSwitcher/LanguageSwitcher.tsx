// // src/components/common/LanguageSwitcher/LanguageSwitcher.tsx
// import React from 'react';
// import { useTranslation } from 'react-i18next';
// import styles from './LanguageSwitcher.module.scss';

// const LanguageSwitcher: React.FC = () => {
//   const { i18n } = useTranslation();

//   const toggleLanguage = () => {
//     const newLang = i18n.language === 'en' ? 'ar' : 'en';
//     i18n.changeLanguage(newLang);
//   };

//   return (
//     <button
//       className={styles.languageSwitcher}
//       onClick={toggleLanguage}
//       aria-label="Toggle Language"
//       title={i18n.language === 'en' ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية'}
//     >
//       <span className={styles.languageSwitcher__text}>
//         {i18n.language === 'en' ? 'AR' : 'EN'}
//       </span>
//       <svg
//         className={styles.languageSwitcher__icon}
//         width="20"
//         height="20"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       >
//         <circle cx="12" cy="12" r="10" />
//         <line x1="2" y1="12" x2="22" y2="12" />
//         <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
//       </svg>
//     </button>
//   );
// };

// export default LanguageSwitcher;


// src/components/common/LanguageSwitcher/LanguageSwitcher.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './LanguageSwitcher.module.scss';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
    document.documentElement.setAttribute('lang', newLang);
    document.documentElement.setAttribute('dir', newLang === 'ar' ? 'rtl' : 'ltr');
  };

  return (
    <button
      className={styles.languageSwitcher}
      onClick={toggleLanguage}
      aria-label="Toggle Language"
      title={i18n.language === 'en' ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية'}
    >
      <span className={styles.languageSwitcher__text}>
        {i18n.language === 'en' ? 'AR' : 'EN'}
      </span>
      <svg
        className={styles.languageSwitcher__icon}
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    </button>
  );
};

export default LanguageSwitcher;