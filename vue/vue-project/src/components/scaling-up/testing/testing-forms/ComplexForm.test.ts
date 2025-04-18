import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import ComplexForm, { type FormFields } from './ComplexForm.vue'

describe('test complex form', () => {
  test('submits a form', async () => {
    const wrapper = mount(ComplexForm)

    const testValues: FormFields = {
      email: 'test@mail.co',
      description: 'Decription',
      city: 'new-york',
      subscribe: true,
      interval: 'monthly',
    }

    await wrapper.find('[type="email"]').setValue(testValues.email)
    await wrapper.find('textarea').setValue(testValues.description)
    await wrapper.find('select').setValue(testValues.city)
    await wrapper.find('[type="checkbox"]').setValue(testValues.subscribe)
    await wrapper.find(`[type="radio"][value=${testValues.interval}]`).setValue()

    await wrapper.find('form').trigger('submit.prevent')

    const submit = wrapper.emitted('submit')

    expect(submit).toBeDefined()
    expect(submit![0]).toStrictEqual([testValues])
  })
})
