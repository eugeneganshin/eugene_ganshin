import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import translationEn from './locales/en/translation.json';
import translationRu from './locales/ru/translation.json';

const resources = {
	en: {
		translation: translationEn,
	},
	ru: {
		translation: translationRu,
	},
};

const Languages = ['en', 'ru'];
i18n
	// load translation using http -> see /public/locales
	// learn more: https://github.com/i18next/i18next-http-backend
	.use(Backend)
	// detect user language
	// learn more: https://github.com/i18next/i18next-browser-languageDetector
	.use(LanguageDetector)
	// pass the i18n instance to react-i18next.
	.use(initReactI18next)
	// init i18next
	// for all options read: https://www.i18next.com/overview/configuration-options
	.init({
		fallbackLng: 'en',
		debug: true,
		whitelist: Languages,
		backend: {
			// for all available options read the backend's repository readme file
			loadPath: `${window.location.pathname}/locales/{{lng}}/{{ns}}.json`,
		},
		interpolation: {
			escapeValue: false, // not needed for react as it escapes by default
		},
	});

export default i18n;
