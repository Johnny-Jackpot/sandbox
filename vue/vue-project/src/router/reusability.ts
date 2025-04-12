import type { RouteRecordRaw } from 'vue-router'

export const reusabilityRoutes: RouteRecordRaw = {
  path: '/reusability',
  children: [
    {
      path: 'composables',
      name: 'composables',
      component: () => import('@/views/reusability/ComposablesView.vue'),
    },
    {
      path: 'custom-directives',
      name: 'custom-directives',
      component: () => import('@/views/reusability/CustomDirectivesView.vue'),
    },
    {
      path: 'plugins',
      name: 'plugins',
      component: () => import('@/views/reusability/PluginsView.vue'),
    },
  ],
}
