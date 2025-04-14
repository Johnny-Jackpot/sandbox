import { useCounter } from './counter'
import { describe, expect, test } from 'vitest'

describe('useCounter', () => {
  const { count, increment } = useCounter()

  test('initial value is 0', () => {
    expect(count.value).toBe(0)
  })

  test('increments by 1', () => {
    increment()
    expect(count.value).toBe(1)
  })
})
