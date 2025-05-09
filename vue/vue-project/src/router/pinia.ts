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
    {
      path: 'defining-store',
      name: 'defining-store',
      component: () => import('@/views/pinia/DefiningStoreView.vue'),
      meta: {
        title: 'Defining Store',
      },
    },
    {
      path: 'state',
      name: 'state',
      component: () => import('@/views/pinia/StateView.vue'),
      meta: {
        title: 'State',
      },
    },
    {
      path: 'getters',
      name: 'getters',
      component: () => import('@/views/pinia/GettersView.vue'),
      meta: {
        title: 'Getters',
      },
    },
  ],
}
