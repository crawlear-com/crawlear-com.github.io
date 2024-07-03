import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import LazyImportPlugin from './LazyImport'

function clientTranslationsInit() {
  i18n.use(LanguageDetector)
  .use(LazyImportPlugin)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    ns: ['main'],
    saveMissing: true, // for missing key handler to fire
    missingKeyHandler: function (lng, ns, key, fallbackValue) {
      console.log('MISSING KEY HANDLER!')
      console.log(key);
    }
  })  
}

export default clientTranslationsInit