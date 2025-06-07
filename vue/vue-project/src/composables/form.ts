import { computed, ref, watch, type Ref } from 'vue'
import { z } from 'zod'

export function useForm<FormDataT>({
  initialFormState,
  backendData,
  validateSchema,
}: {
  initialFormState: FormDataT
  backendData?: Ref<Partial<FormDataT>> | Ref<undefined>
  validateSchema?: z.ZodObject<{
    [K in keyof FormDataT]: z.ZodType<FormDataT[K]>
  }>
}) {
  const formData = ref<FormDataT>({ ...initialFormState })
  const showErrors = ref<boolean>(false)

  watch(
    () => backendData?.value,
    (newData) => {
      if (newData) {
        formData.value = { ...formData.value, ...newData }
      }
    },
  )

  const validate = () => {
    if (!validateSchema) {
      return
    }

    const res = validateSchema.safeParse(formData.value)

    return res.success ? undefined : res.error.format()
  }

  const errors = computed(() => (showErrors.value ? validate() : undefined))

  const reset = () => {
    formData.value = { ...initialFormState, ...(backendData?.value || {}) }
    showErrors.value = false
  }

  type OnSubmit = (values: FormDataT) => void

  const handleSubmit = (onSubmit: OnSubmit) => {
    return async (e: Event) => {
      e.preventDefault()

      const errors = validate()
      if (errors) {
        showErrors.value = true
        return
      }

      onSubmit(formData.value)
    }
  }

  return {
    formData,
    errors,
    reset,
    handleSubmit,
  }
}
