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
    {
      path: 'transition-group',
      name: 'transition-group',
      component: () => import('@/views/build-in-components/TransitionGroupView.vue'),
      meta: {
        title: 'Transition Group',
      },
    },
    {
      path: 'keep-alive',
      name: 'keep-alive',
      component: () => import('@/views/build-in-components/KeepAliveView.vue'),
      meta: {
        title: 'Keep alive',
      },
    },
    {
      path: 'teleport',
      name: 'teleport',
      component: () => import('@/views/build-in-components/TeleportView.vue'),
      meta: {
        title: 'Teleport',
      },
    },
  ],
}
