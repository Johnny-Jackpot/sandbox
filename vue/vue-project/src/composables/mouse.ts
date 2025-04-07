import { ref } from 'vue'
import { useEventListener } from './event'

export function useMouse() {
  const x = ref(0)
  const y = ref(0)

  useEventListener(window, 'mousemove', (evt) => {
    x.value = (evt as MouseEvent).pageX
    y.value = (evt as MouseEvent).pageY
  })

  return { x, y }
}
