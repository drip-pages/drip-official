import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import translationJA from '../data/language/ja.json'
import translationEN from '../data/language/en.json'

const resources = {
  en: {
    translation: translationEN,
  },
  ja: {
    translation: translationJA,
  },
}
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'ja',
    fallbackLng: 'ja',
    whitelist: ['en', 'ja'],
    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    react: {
      wait: true,
    },
  })

export default i18n
