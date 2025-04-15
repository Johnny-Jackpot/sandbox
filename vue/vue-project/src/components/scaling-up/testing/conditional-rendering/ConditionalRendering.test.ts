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
})
