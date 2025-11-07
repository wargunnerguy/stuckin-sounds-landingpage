import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap' // JS bundle if you use Collapse/Modal/etc.
import './styles/theme.css' // your overrides


import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'
import router from './router/index.js'


import i18n, { DEFAULT_LOCALE } from './i18n'

const app = createApp(App).use(createPinia()).use(router).use(i18n)
document.documentElement.lang = DEFAULT_LOCALE
app.mount('#app')
