import { useUpdateUser, useUser } from "./api";
import { z } from "zod";
import { useForm } from "./use-form";

const initialFormState: FormData = {
  name: "",
  email: "",
  phone: "",
};

const formDataSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  phone: z.string(),
});

type FormData = z.infer<typeof formDataSchema>;

export function UserForm({ id }: { id: string }) {
  const userQuery = useUser(id);
  const updateUserMutation = useUpdateUser();

  const { formData, setFormData, errors, reset, isDirty, handleSubmit } =
    useForm<FormData>({
      initialFormState,
      backendData: userQuery.data,
      validateSchema: formDataSchema,
    });

  const onSubmit = async (values: FormData) => {
    await updateUserMutation.mutateAsync({
      id,
      ...values,
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <form
        className="mb-8 bg-white rounded-lg shadow-md p-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) => {
              setFormData((state) => ({ ...state, name: e.target.value }));
            }}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <div className="text-red-500">{errors?.name?._errors.join(", ")}</div>
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) => {
              setFormData((state) => ({ ...state, email: e.target.value }));
            }}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <div className="text-red-500">
            {errors?.email?._errors.join(", ")}
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={(e) => {
              setFormData((state) => ({ ...state, phone: e.target.value }));
            }}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <div className="text-red-500">
            {errors?.phone?._errors.join(", ")}
          </div>
        </div>

        <button
          type="submit"
          disabled={
            updateUserMutation.isPending || userQuery.isPending || !!errors
          }
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg shadow-sm shadow-blue-500 hover:bg-blue-600 transition-colors disabled:opacity-50"
        >
          Update User
        </button>
        <button
          type="button"
          disabled={!isDirty || userQuery.isPending}
          onClick={reset}
          className="w-full bg-red-500 mt-2 text-white py-2 px-4 rounded-lg shadow-sm shadow-red-500 hover:bg-red-600 transition-colors disabled:opacity-50"
        >
          Reset
        </button>
      </form>
    </div>
  );
}
