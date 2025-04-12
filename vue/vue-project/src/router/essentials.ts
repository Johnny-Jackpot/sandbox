import type { RouteRecordRaw } from 'vue-router'

export const essentialsRoutes: RouteRecordRaw = {
  path: '/essentials',
  children: [
    {
      path: 'template-syntax',
      name: 'template-syntax',
      component: () => import('@/views/essentials/TemplateSyntaxView.vue'),
    },
    {
      path: 'reactivity-fundamentals',
      name: 'reactivity-fundamentals',
      component: () => import('@/views/essentials/ReactivityFundamentalsView.vue'),
    },
    {
      path: 'computed-properties',
      name: 'computed-properties',
      component: () => import('@/views/essentials/ComputedPropertiesView.vue'),
    },
    {
      path: 'class-and-style-bindings',
      name: 'class-and-style-bindings',
      component: () => import('@/views/essentials/ClassAndStyleBindingView.vue'),
    },
    {
      path: 'conditional-rendering',
      name: 'conditional-rendering',
      component: () => import('@/views/essentials/ConditionalrenderingView.vue'),
    },
    {
      path: 'list-rendering',
      name: 'list-rendering',
      component: () => import('@/views/essentials/ListRenderingView.vue'),
    },
    {
      path: 'event-handling',
      name: 'event-handling',
      component: () => import('@/views/essentials/EventHandlingView.vue'),
    },
    {
      path: 'form-input-bindings',
      name: 'form-input-bindings',
      component: () => import('@/views/essentials/FormInputBindingsView.vue'),
    },
    {
      path: 'watchers',
      name: 'watchers',
      component: () => import('@/views/essentials/WatchersView.vue'),
    },
    {
      path: 'template-refs',
      name: 'template-refs',
      component: () => import('@/views/essentials/TemplateRefsView.vue'),
    },
    {
      path: 'components-basics',
      name: 'components-basics',
      component: () => import('@/views/essentials/ComponentsBasicsView.vue'),
    },
    {
      path: 'lifecycle-hooks',
      name: 'lifecycle-hooks',
      component: () => import('@/views/essentials/LifeCycleHooksView.vue'),
    },
  ],
}
