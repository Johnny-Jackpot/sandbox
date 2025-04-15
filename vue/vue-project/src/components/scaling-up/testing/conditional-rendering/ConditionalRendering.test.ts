import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import ConditionalRenderingCopy from './ConditionalRendering.vue'

describe('Conditional rendering component', () => {
  test('renders a profile link', () => {
    const wrapper = mount(ConditionalRenderingCopy)

    const profileLink = wrapper.get('#profile')

    expect(profileLink.text()).toEqual('My profile')
  })
})
