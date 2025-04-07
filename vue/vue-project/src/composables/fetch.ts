import { ref, toValue, watchEffect } from 'vue'

export function useFetch(url: any) {
  const data = ref(null)
  const error = ref<string | null>(null)
  const isLoading = ref(false)

  watchEffect(async () => {
    data.value = null
    error.value = null
    isLoading.value = true

    const urlValue = toValue(url)

    try {
      await timeout()

      const res = await fetch(urlValue)
      data.value = await res.json()
    } catch (e) {
      error.value = e instanceof Error ? e.message : String(e)
    } finally {
      isLoading.value = false
    }
  })

  return { data, error, isLoading }
}

function timeout() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.3) {
        resolve(1)
      } else {
        reject(new Error('Random Error'))
      }
    }, 300)
  })
}
