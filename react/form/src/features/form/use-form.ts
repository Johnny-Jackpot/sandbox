import { useState } from "react";
import { z } from "zod";

export function useForm<FormDataT>({
  initialFormState,
  backendData,
  validateSchema,
}: {
  initialFormState: FormDataT;
  backendData?: Partial<FormDataT>;
  validateSchema?: z.ZodObject<{
    [K in keyof FormDataT]: z.ZodType<FormDataT[K]>;
  }>;
}) {
  const [inputFormData, setFormData] = useState<Partial<FormDataT>>({});
  const [showErrors, setShowErrors] = useState(false);

  const formData = {
    ...initialFormState,
    ...(backendData || {}),
    ...inputFormData,
  };

  const isDirty = Object.entries(inputFormData).some(
    ([key, value]) =>
      (backendData || initialFormState)?.[key as keyof FormDataT] !== value,
  );

  const validate = () => {
    if (!validateSchema) {
      return;
    }

    const res = validateSchema.safeParse(formData);

    return res.success ? undefined : res.error.format();
  };

  const errors = showErrors ? validate() : undefined;

  type OnSubmit = (values: FormDataT) => void;

  const handleSubmit = (onSubmit: OnSubmit) => {
    return async (e: React.MouseEvent<HTMLFormElement>) => {
      e.preventDefault();

      const errors = validate();
      if (errors) {
        setShowErrors(true);
        return;
      }

      onSubmit(formData);
    };
  };

  return {
    formData,
    setFormData,
    errors,
    reset: () => setFormData({}),
    isDirty,
    validate,
    handleSubmit,
  };
}
