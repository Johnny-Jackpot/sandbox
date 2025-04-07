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
        {
          path: 'watchers',
          name: 'watchers',
          component: () => import('../views/essentials/WatchersView.vue'),
        },
        {
          path: 'template-refs',
          name: 'template-refs',
          component: () => import('../views/essentials/TemplateRefsView.vue'),
        },
        {
          path: 'components-basics',
          name: 'components-basics',
          component: () => import('../views/essentials/ComponentsBasicsView.vue'),
        },
        {
          path: 'lifecycle-hooks',
          name: 'lifecycle-hooks',
          component: () => import('../views/essentials/LifeCycleHooksView.vue'),
        },
      ],
    },
    {
      path: '/components-in-depth',
      children: [
        {
          path: 'props',
          name: 'props',
          component: () => import('../views/components-in-depth/PropsView.vue'),
        },
        {
          path: 'events',
          name: 'events',
          component: () => import('../views/components-in-depth/EventsView.vue'),
        },
        {
          path: 'component-v-model',
          name: 'component-v-model',
          component: () => import('../views/components-in-depth/ComponentVModel.vue'),
        },
        {
          path: 'fallthrough-attributes',
          name: 'fallthrough-attributes',
          component: () => import('../views/components-in-depth/FallthrougAttributesView.vue'),
        },
        {
          path: 'slots',
          name: 'slots',
          component: () => import('../views/components-in-depth/SlotsView.vue'),
        },
        {
          path: 'provide-inject',
          name: 'provide-inject',
          component: () => import('../views/components-in-depth/ProvideInject.vue'),
        },
        {
          path: 'async-components',
          name: 'async-components',
          component: () => import('../views/components-in-depth/AsyncComponentsView.vue'),
        },
      ],
    },
    {
      path: '/reusability',
      children: [
        {
          path: 'composables',
          name: 'composables',
          component: () => import('@/views/reusability/Composables.vue'),
        },
      ],
    },
  ],
})

export default router
