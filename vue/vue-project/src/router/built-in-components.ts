import type { RouteRecordRaw } from 'vue-router'

export const builtInComponentsRoutes: RouteRecordRaw = {
  path: '/build-in-components',
  children: [
    {
      path: 'transition',
      name: 'transition',
      component: () => import('@/views/build-in-components/TransitionView.vue'),
      meta: {
        title: 'Transition',
      },
    },
  ],
}
