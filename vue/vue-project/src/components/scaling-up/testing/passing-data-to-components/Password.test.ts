import { describe, test } from 'vitest'
import Password from './Password.vue'
import { mount } from '@vue/test-utils'
import { log } from 'console'

describe('Test pasword component', () => {
  test('renders an error if password too short', async () => {
    const Wrapper = {
      components: { Password },
      template: '<Password ref="child" v-bind="$props" />',
    }

    const wrapper = mount(Wrapper, {
      props: {
        minLength: 10,
      },
    })
    const child = wrapper.vm.$refs.child
    child.password = 'test'
    log('==========')
    log(child.password)
    log('==========')

    const passwordWrapper = mount(Password, {
      props: {
        minLength: 10,
      },
    })
  })
})
