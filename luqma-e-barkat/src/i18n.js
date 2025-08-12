// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translations
const resources = {
  en: {
    translation: {
      "My Donations": "My Donations",
      "Donate Food": "Donate Food",
      "Profile": "Profile",
      "Settings": "Settings",
      "Logout": "Logout",
      "Change Language": "Change Language",
      "Toggle Notifications": "Toggle Notifications",
      "Notifications On": "Notifications On",
      "Notifications Off": "Notifications Off"
    }
  },
  ur: {
    translation: {
      "My Donations": "میری امداد",
      "Donate Food": "خوراک عطیہ کریں",
      "Profile": "پروفائل",
      "Settings": "ترتیبات",
      "Logout": "خارج ہوں",
      "Change Language": "زبان تبدیل کریں",
      "Toggle Notifications": "اطلاعات آن/آف کریں",
      "Notifications On": "اطلاعات آن ہیں",
      "Notifications Off": "اطلاعات بند ہیں"
    }
  }
};

// Init
i18n
  .use(LanguageDetector) // Detects browser language
  .use(initReactI18next) // Passes i18n to React
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already escapes
    },
  });

export default i18n;
