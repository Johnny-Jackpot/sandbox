import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import ConditionalRendering from './ConditionalRendering.vue'

describe('Conditional rendering component', () => {
  test('Renders a profile link', () => {
    const wrapper = mount(ConditionalRendering)

    const profileLink = wrapper.get('#profile')

    expect(profileLink.text()).toEqual('My profile')
  })

  test('Does not render an admin link', () => {
    const wrapper = mount(ConditionalRendering)
    expect(wrapper.find('#admin').exists()).toBe(false)
  })

  test('Renders admin link', async () => {
    const wrapper = mount(ConditionalRendering)

    await wrapper.get('button').trigger('click')

    expect(wrapper.find('#admin').exists()).toBe(true)
    expect(wrapper.get('#admin').text()).toEqual('Admin')
  })

  test('Hidden admin link exists in DOM but not shown', () => {
    const wrapper = mount(ConditionalRendering)

    expect(wrapper.get('#admin-v-show').isVisible()).toBe(false)
  })
})
