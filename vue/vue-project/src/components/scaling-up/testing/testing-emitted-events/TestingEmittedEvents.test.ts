import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import TestingEmittedEvents from './TestingEmittedEvents.vue'

describe('Testing emitted events', () => {
  test('emits an event when clicked', () => {
    const wrapper = mount(TestingEmittedEvents)

    wrapper.find('button').trigger('click')
    wrapper.find('button').trigger('click')

    expect(wrapper.emitted()).toHaveProperty('increment')
  })
})
