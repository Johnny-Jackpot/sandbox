import { mount } from '@vue/test-utils'
import TodoList from './TodoList.vue'
import { describe, expect, test } from 'vitest'

describe('TodoList tests', () => {
  test('renders a todo', () => {
    const wrapper = mount(TodoList)

    const todo = wrapper.get('[data-test="todo"]')

    expect(todo.text()).toBe('Learn Vue.js 3')
  })
})
