import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import InteractingWithFormElements from './InteractingWithFormElements.vue'

describe('test simple form', () => {
  test('sets the value', async () => {
    const wrapper = mount(InteractingWithFormElements)
    const input = wrapper.find('input')
    const email = 'test@mail.com'
    await input.setValue(email)

    expect(input.element.value).toBe(email)
  })

  test('emits input to its parent', async () => {
    const wrapper = mount(InteractingWithFormElements)

    const email = 'test@mail.com'

    await wrapper.find('input').setValue(email)
    await wrapper.find('button').trigger('click')

    const emittedSubmit = wrapper.emitted('submit')
    expect(emittedSubmit).toBeDefined()
    expect(emittedSubmit![0]).toEqual([email])
  })
})
