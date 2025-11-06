import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

import './styles/main.scss'
import 'bootstrap/dist/js/bootstrap.bundle.min.js' // side-effect import

createApp(App).use(router).use(createPinia()).mount('#app')
