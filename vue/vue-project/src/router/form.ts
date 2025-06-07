import type { RouteRecordRaw } from 'vue-router'

export const formRoutes: RouteRecordRaw = {
  path: '/forms',
  children: [
    {
      path: 'simple-form',
      name: 'Simple form',
      component: () => import('@/views/form/SimpleFormView.vue'),
    },
  ],
}
