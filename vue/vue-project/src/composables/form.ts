import { computed, ref, watch, type Ref } from 'vue'
import { z } from 'zod'

export function useForm<FormDataT>({
  initialFormState,
  defferedInitialFormState,
  validateSchema,
}: {
  initialFormState: FormDataT
  defferedInitialFormState?: Ref<Partial<FormDataT>> | Ref<undefined>
  validateSchema?: z.ZodObject<{
    [K in keyof FormDataT]: z.ZodType<FormDataT[K]>
  }>
}) {
  const formData = ref<FormDataT>({ ...initialFormState })
  const showErrors = ref<boolean>(false)
  const errors = computed(() => (showErrors.value ? validate() : undefined))
  watch(
    () => defferedInitialFormState?.value,
    (newData) => {
      if (newData) {
        formData.value = { ...formData.value, ...newData }
      }
    },
  )

  function validate() {
    if (!validateSchema) {
      return
    }

    const res = validateSchema.safeParse(formData.value)

    return res.success ? undefined : res.error.format()
  }

  function reset() {
    formData.value = { ...initialFormState, ...(defferedInitialFormState?.value || {}) }
    showErrors.value = false
  }

  function handleSubmit(onSubmit: (values: FormDataT) => void) {
    return () => {
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
