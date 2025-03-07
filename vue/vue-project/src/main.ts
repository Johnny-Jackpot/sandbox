import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.config.errorHandler = (err, vm, info) => {
  console.error('Vue error handler:', err, vm, info)
}

app.mount('#app')
