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
    {
      path: 'vue-test-utils-crash-course',
      name: 'vue-test-utils-crash-course',
      component: () => import('@/views/scaling-up/VueTestUtilsCrashCourse.vue'),
      meta: {
        title: 'Vue Test Utils Crash Course',
      },
    },
  ],
}
