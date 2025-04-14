import type { RouteRecordRaw } from 'vue-router'

export const scalingUpRoutes: RouteRecordRaw = {
  path: '/build-in-components',
  children: [
    {
      path: 'state-management',
      name: 'state-management',
      component: () => import('@/views/scaling-up/StateManagementView.vue'),
      meta: {
        title: 'State Management',
      },
    },
  ],
}
