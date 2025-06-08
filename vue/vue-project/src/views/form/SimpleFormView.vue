<script setup lang="ts">
import { useUser } from "@/util/api";
import { z } from "zod";
import { useForm } from "@/composables/form";

const formDataSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  phone: z.string(),
});

type FormData = z.infer<typeof formDataSchema>;

const initialFormState: FormData = {
  name: "",
  email: "",
  phone: "",
};

const { data, isLoading, isError } = useUser('1');
const { formData, errors, isDirty, reset, handleSubmit } = useForm<FormData>({
  initialFormState,
  defferedInitialFormState: data,
  validateSchema: formDataSchema
})

const onSubmit = handleSubmit((values: FormData) => {
  console.log(values);
})

</script>

<template>
  <div className="max-w-4xl mx-auto p-6">
    <form className="mb-8 bg-white rounded-lg shadow-md p-6" @submit.prevent="onSubmit">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
          Name
        </label>
        <input type="text" id="name" name="name" v-model="formData.name"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <div className="text-red-500">{{ errors?.name?._errors.join(", ") }}</div>
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          Email
        </label>
        <input type="email" id="email" name="email" v-model="formData.email"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <div className="text-red-500">
          {{ errors?.email?._errors.join(", ") }}
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
          Phone
        </label>
        <input type="tel" id="phone" name="phone" v-model="formData.phone"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <div className="text-red-500">
          {{ errors?.phone?._errors.join(", ") }}
        </div>
      </div>

      <button type="submit" :disabled="!isDirty || isLoading"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg shadow-sm shadow-blue-500 hover:bg-blue-600 transition-colors disabled:opacity-50">
        Update User
      </button>
      <button type="button" @click="reset"
        className="w-full bg-red-500 mt-2 text-white py-2 px-4 rounded-lg shadow-sm shadow-red-500 hover:bg-red-600 transition-colors disabled:opacity-50">
        Reset
      </button>
    </form>
  </div>
</template>

<style scoped></style>
