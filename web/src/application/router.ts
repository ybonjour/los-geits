import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '@/application/DashboardView.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: DashboardView,
    },
  ],
})
