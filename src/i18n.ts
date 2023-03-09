import i18n from 'i18next'
import { english } from './translations/english'
import { portuguese } from './translations/portuguese'
import { initReactI18next } from 'react-i18next'

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  pt: {
    translation: portuguese,
  },
  en: {
    translation: english,
  },
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'pt',
    interpolation: {
      escapeValue: false, // react already safe from xss
    },
  })

export default i18n
