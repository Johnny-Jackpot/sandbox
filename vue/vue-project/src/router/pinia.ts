import type { RouteRecordRaw } from 'vue-router'

export const piniaRoutes: RouteRecordRaw = {
  path: '/pinia',
  children: [
    {
      path: 'getting-started',
      name: 'getting-started',
      component: () => import('@/views/pinia/PiniaGettingStartedView.vue'),
      meta: {
        title: 'Pinia Getting Started',
      },
    },
  ],
}
