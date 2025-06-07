import './assets/main.css'

import { createApp, defineAsyncComponent } from 'vue'
import { createPinia } from 'pinia'

import { VueQueryPlugin } from '@tanstack/vue-query'

import App from './App.vue'
import router from './router'
import GlobalComponent from './components/components-in-depth/registration/GlobalComponent.vue'
import { appMessage } from './main-inject-keys'

import i18n from './plugins/i18n'
import { messages } from './plugins/messages'

const app = createApp(App)

app.use(VueQueryPlugin)

app.component('GlobalComponent', GlobalComponent)
app.component(
  'GlobalAsyncComponent',
  defineAsyncComponent(
    () => import('@/components/components-in-depth/async-components/GlobalAsyncComponent.vue'),
  ),
)

const pinia = createPinia()

declare module 'pinia' {
  export interface PiniaCustomProperties {
    secret: string
  }
}

function piniaPlugin() {
  return { secret: 'Hello world!' }
}

pinia.use(piniaPlugin)

app.use(pinia)
app.use(router)

app.config.errorHandler = (err, vm, info) => {
  console.error('Vue error handler:', err, vm, info)
}

app.provide(appMessage, 'App level hello world')

app.directive('green', {
  mounted: (el: HTMLElement) => {
    el.classList.add('green')
  },
})

app.use(i18n, messages)

app.mount('#app')
