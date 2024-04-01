import { createRouter, createWebHistory } from 'vue-router'
import CabulasView from '@/views/CabulasView.vue'
import StatusView from '@/views/StatusView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'apontamentos',
      component: CabulasView
    },
    {
      path: '/stats',
      name: 'stats',
      component: StatusView
    }
  ]
})

export default router
