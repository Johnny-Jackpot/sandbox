import { setActivePinia, createPinia } from 'pinia'
import { useCounterStore } from './counter'
import { beforeEach, describe, expect, it, vi } from 'vitest'

describe('Counter Store AI generated tests', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should initialize with count 0', () => {
    const counterStore = useCounterStore()
    expect(counterStore.count).toBe(0)
  })

  it('should increment the count', () => {
    const counterStore = useCounterStore()
    counterStore.increment()
    expect(counterStore.count).toBe(1)
  })

  it('should randomize the count', () => {
    const counterStore = useCounterStore()
    counterStore.randomizeCounter()
    expect(counterStore.count).toBeGreaterThanOrEqual(0)
    expect(counterStore.count).toBeLessThanOrEqual(100)
  })

  it('should randomize the count asynchronously', async () => {
    const counterStore = useCounterStore()
    await counterStore.randomizeCounterAsync(500)
    expect(counterStore.count).toBeGreaterThanOrEqual(0)
    expect(counterStore.count).toBeLessThanOrEqual(100)
  })

  it('should throw an error in errorAction', () => {
    const counterStore = useCounterStore()
    expect(() => counterStore.errorAction()).toThrow('Error action')
  })
})
