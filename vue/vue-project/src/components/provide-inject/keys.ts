import type { InjectionKey, Ref } from 'vue'

export const expensiveCountKey = Symbol() as InjectionKey<number>
export const messageKey = Symbol() as InjectionKey<Ref<string, string>>
export const countKey = Symbol() as InjectionKey<{
  count: Readonly<Ref<number, number>>
  increment: () => void
}>
