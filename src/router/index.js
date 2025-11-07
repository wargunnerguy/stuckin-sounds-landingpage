import { createRouter, createWebHistory } from 'vue-router'
import Landing from '@/views/Landing.vue'
import i18n from '@/i18n'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{ path: '/', name: 'home', component: Landing }],
})

router.afterEach((to) => {
  document.title = i18n.global.t(`meta.${to.name}`)
})

export default router
