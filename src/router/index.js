import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/Dummy.vue'),
    },
    {
      path: '/practices',
      name: 'practices',
      component: () => import('../views/Dummy.vue'),
    },
    {
      path: '/logs',
      name: 'logs',
      component: () => import('../views/Dummy.vue'),
    },
  ],
})

export default router
