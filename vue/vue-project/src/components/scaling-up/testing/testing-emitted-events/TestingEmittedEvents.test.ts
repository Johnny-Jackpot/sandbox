import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import TestingEmittedEvents from './TestingEmittedEvents.vue'

const incrementEventName = 'increment'
const complexIncrementEventName = 'complexIncrement'

describe('Testing emitted events', () => {
  test('emits an event when clicked', () => {
    const wrapper = mount(TestingEmittedEvents)

    wrapper.find('button').trigger('click')
    wrapper.find('button').trigger('click')

    expect(wrapper.emitted()).toHaveProperty(incrementEventName)
  })

  test('emits an event with count argument when clicked', () => {
    const wrapper = mount(TestingEmittedEvents)

    wrapper.find('button').trigger('click')
    wrapper.find('button').trigger('click')

    const incrementEvent = wrapper.emitted(incrementEventName)

    expect(incrementEvent).toBeDefined()
    expect(incrementEvent).toHaveLength(2)
    expect(incrementEvent![0]).toEqual([1])
    expect(incrementEvent![1]).toEqual([2])
  })

  test('complexIncrement event has correct arguments', () => {
    const wrapper = mount(TestingEmittedEvents)

    wrapper.find('button').trigger('click')
    wrapper.find('button').trigger('click')

    const complexIncrement = wrapper.emitted(complexIncrementEventName)
    expect(complexIncrement).toBeDefined()
    expect(complexIncrement).toHaveLength(2)
    expect(complexIncrement![0]).toEqual([{ count: 1, isEven: false }])
    expect(complexIncrement![1]).toEqual([{ count: 2, isEven: true }])
  })
})
