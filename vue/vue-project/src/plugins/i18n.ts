import type { App } from 'vue'

declare module 'vue' {
  interface ComponentCustomProperties {
    $translate: (key: string) => string
  }
}

interface Translation {
  [key: string]: Translation | string
}

export default {
  install(app: App, options: Translation) {
    app.config.globalProperties.$translate = (key: string) =>
      (key.split('.').reduce<Translation | string | undefined>((opt, key) => {
        return opt && typeof opt === 'object' ? opt[key] : undefined
      }, options) as string) || ''
  },
}
