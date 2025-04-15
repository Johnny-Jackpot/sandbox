import { mount } from '@vue/test-utils'
import TodoList from './TodoList.vue'
import { describe, expect, test } from 'vitest'

describe('TodoList tests', () => {
  test('renders a todo', () => {
    const wrapper = mount(TodoList)

    const todo = wrapper.get('[data-test="todo"]')

    expect(todo.text()).toBe('Learn Vue.js 3')
  })

  test('creates a todo', async () => {
    const wrapper = mount(TodoList)

    expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(1)

    await wrapper.get('[data-test="new-todo"]').setValue('New todo')
    await wrapper.get('[data-test="form"]').trigger('submit')

    expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(2)
  })

  test('completes a todo', async () => {
    const wrapper = mount(TodoList)
    await wrapper.get('[data-test="todo-checkbox"]').setValue(true)
    expect(wrapper.get('[data-test="todo"]').classes()).toContain('completed')
  })
})
