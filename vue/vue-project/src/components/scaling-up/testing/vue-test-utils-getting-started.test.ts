import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'

const MessageComponent = {
  template: '<p>{{ msg }}</p>',
  props: ['msg'],
}

describe('Vue test utils getting started', () => {
  test('displays message', () => {
    const wrapper = mount(MessageComponent, {
      props: {
        msg: 'Hello world',
      },
    })

    expect(wrapper.text()).toContain('Hello world')
  })
})
