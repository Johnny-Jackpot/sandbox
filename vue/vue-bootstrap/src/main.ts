import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Import only the Bootstrap components we need
import { Popover } from 'bootstrap'

import App from './App.vue'
import router from './router'

// Import our custom CSS
import './styles.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.config.errorHandler = (err, vm, info) => {
  console.error('Vue error handler:', err, vm, info)
}

app.mount('#app')

// Create an example popover
document.querySelectorAll('[data-bs-toggle="popover"]').forEach((popover) => {
  new Popover(popover)
})
