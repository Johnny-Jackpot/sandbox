import { ref } from 'vue'

export function useFetch(url: string) {
  const data = ref(null)
  const loading = ref(true)
  const error = ref(null)

  fetch(url)
    .then((res) => res.json())
    .then((json) => (data.value = json))
    .catch((err) => (error.value = err))
    .finally(() => {
      loading.value = false
    })

  return { data, loading, error }
}
