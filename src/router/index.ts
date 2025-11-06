import { createRouter, createWebHistory, type RouterScrollBehavior, type RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'home', component: Home }
]

const scrollBehavior: RouterScrollBehavior = (to, _from, savedPosition) => {
  if (to.hash) return { el: to.hash, behavior: 'smooth' }
  return savedPosition ?? { top: 0, behavior: 'smooth' }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior
})

export default router
