import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

import { essentialsRoutes } from './essentials'
import { componentsInDepthRoutes } from './components-in-depth'
import { reusabilityRoutes } from './reusability'
import { builtInComponentsRoutes } from './built-in-components'
import { scalingUpRoutes } from './scaling-up'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/AboutView.vue'),
    },
    {
      path: '/introduction',
      name: 'introduction',
      component: () => import('@/views/introduction/IntroductionView.vue'),
    },
    essentialsRoutes,
    componentsInDepthRoutes,
    reusabilityRoutes,
    builtInComponentsRoutes,
    scalingUpRoutes,
  ],
})

export default router
