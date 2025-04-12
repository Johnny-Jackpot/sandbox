import type { RouteRecordRaw } from 'vue-router'

export const componentsInDepthRoutes: RouteRecordRaw = {
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
}
