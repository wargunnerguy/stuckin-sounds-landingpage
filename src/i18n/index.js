import { createI18n } from 'vue-i18n'
import en from './en.json'
import et from './et.json'

const stored = localStorage.getItem('locale')
const browser = navigator.language?.toLowerCase().startsWith('et') ? 'et' : 'en'
export const DEFAULT_LOCALE = stored || browser

const i18n = createI18n({
  legacy: false,
  locale: DEFAULT_LOCALE,
  fallbackLocale: 'en',
  messages: { en, et },
})

export function setLocale(locale) {
  i18n.global.locale.value = locale
  localStorage.setItem('locale', locale)
  document.documentElement.lang = locale
}

export default i18n
