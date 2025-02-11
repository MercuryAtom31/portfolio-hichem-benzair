import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en.json';
import translationFR from './locales/fr.json';

i18n
  .use(LanguageDetector) // Auto-detect browser language
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationEN },
      fr: { translation: translationFR },
    },
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback if the language isn't available
    interpolation: { escapeValue: false },
    detection: {
      order: ['navigator', 'localStorage', 'cookie'],
      caches: ['localStorage', 'cookie'],
    },
  });

export default i18n;
