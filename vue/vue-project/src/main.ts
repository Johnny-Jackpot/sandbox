import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import GlobalComponent from './components/components-in-depth/registration/GlobalComponent.vue'

const app = createApp(App)

app.component('GlobalComponent', GlobalComponent)

app.use(createPinia())
app.use(router)

app.config.errorHandler = (err, vm, info) => {
  console.error('Vue error handler:', err, vm, info)
}

app.mount('#app')
