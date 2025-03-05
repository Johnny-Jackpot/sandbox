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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/introduction',
      name: 'introduction',
      component: () => import('../views/introduction/IntroductionView.vue'),
    },
    {
      path: '/essentials',
      children: [
        {
          path: 'template-syntax',
          name: 'template-syntax',
          component: () => import('../views/essentials/TemplateSyntaxView.vue'),
        },
        {
          path: 'reactivity-fundamentals',
          name: 'reactivity-fundamentals',
          component: () => import('../views/essentials/ReactivityFundamentalsView.vue'),
        },
        {
          path: 'computed-properties',
          name: 'computed-properties',
          component: () => import('../views/essentials/ComputedPropertiesView.vue'),
        },
        {
          path: 'class-and-style-bindings',
          name: 'class-and-style-bindings',
          component: () => import('../views/essentials/ClassAndStyleBindingView.vue'),
        },
        {
          path: 'conditional-rendering',
          name: 'conditional-rendering',
          component: () => import('../views/essentials/ConditionalrenderingView.vue'),
        },
        {
          path: 'list-rendering',
          name: 'list-rendering',
          component: () => import('../views/essentials/ListRenderingView.vue'),
        },
        {
          path: 'event-handling',
          name: 'event-handling',
          component: () => import('../views/essentials/EventHandlingView.vue'),
        },
        {
          path: 'form-input-bindings',
          name: 'form-input-bindings',
          component: () => import('../views/essentials/FormInputBindingsView.vue'),
        },
      ],
    },
  ],
})

export default router
