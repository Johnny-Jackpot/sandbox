<script setup lang="ts">
import { onWatcherCleanup, reactive, ref, watch, watchEffect } from 'vue'

type Answer = {
  answer: string
  image: string
}

const question = ref('question')
const answer = ref<Answer>({ answer: 'Questions usually contain a question mark. ;-)', image: '' })
const loading = ref(false)

const unwatchQuestions = watch(question, async (newQuestion) => {
  if (!newQuestion.includes('?')) {
    answer.value = { answer: 'Questions usually contain a question mark. ;-)', image: '' }
    return
  }
  loading.value = true
  answer.value.answer = 'Thinking...'

  try {
    const res = await fetch('https://yesno.wtf/api')
    answer.value = await res.json()
  } catch (error) {
    answer.value.answer = 'Error! Could not reach the API. ' + error
  } finally {
    loading.value = false
  }
})

const x = ref(0)
const y = ref(0)
const unwatchX = watch(x, (newX, oldX) => {
  console.log(`x changed from ${oldX} to ${newX}`)
})

const unwatchXPusY = watch(
  () => x.value + y.value,
  (newSum, oldSum) => {
    console.log(`x + y changed from ${oldSum} to ${newSum}`)
  },
)

function swapXY() {
  x.value = x.value ^ y.value
  y.value = x.value ^ y.value
  x.value = x.value ^ y.value
}

const unwatchXYarr = watch([x, y], ([newX, newY], [oldX, oldY]) => {
  console.log(`x changed from ${oldX} to ${newX}`)
  console.log(`y changed from ${oldY} to ${newY}`)
})

const objX = reactive({ x: 0, foo: { count: 1 } })
const unwatchObjXDeep = watch(
  objX,
  (newObjx) => {
    console.log(`objX changed ${JSON.stringify(newObjx)}`)
  },
  { deep: 1, immediate: true },
)

const unwatchObjXOnce = watch(
  objX,
  (newObjx) => {
    console.log(` objX changed first time ${JSON.stringify(newObjx)}`)
  },
  { once: true },
)

const todoId = ref(1)
const data = ref(null)
const unwatchTodoId = watchEffect(async (onCleanup) => {
  const controller = new AbortController()
  onWatcherCleanup(() => {
    console.log('Watcher cleanup executed')
  })
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId.value}`, {
    signal: controller.signal,
  })

  data.value = await res.json()

  onCleanup(() => {
    console.log('Cleanup executed')

    controller.abort()
  })
})

const unwatchTodoIdPost = watch(
  todoId,
  () => {
    const input = document.getElementById('todo-id') as HTMLInputElement | null
    if (input) {
      console.log(`post Input value: ${input.value}`)
    }
  },
  { flush: 'post' },
)
const unwatchTodoIdPre = watch(
  todoId,
  () => {
    const input = document.getElementById('todo-id') as HTMLInputElement | null
    if (input) {
      console.log(`pre Input value: ${input.value}`)
    }
  },
  { flush: 'pre' },
)
const unwatchTodoIdSync = watch(
  todoId,
  () => {
    const input = document.getElementById('todo-id') as HTMLInputElement | null
    if (input) {
      console.log(`sync Input value: ${input.value}`)
    }
  },
  { flush: 'sync' },
)

function unwatchAll() {
  unwatchQuestions()
  unwatchX()
  unwatchObjXDeep()
  unwatchObjXOnce()
  unwatchTodoIdPost()
  unwatchTodoIdPre()
  unwatchTodoIdSync()
  unwatchXPusY()
  unwatchXYarr()
  unwatchTodoId()
}
</script>

<template>
  <h1>Watchers</h1>
  <p>Ask your question: <input type="text" v-model.lazy="question" /></p>
  <p v-if="loading">Loading...</p>
  <div v-else>
    <p>Here is the answer: {{ answer.answer }}</p>
    <img v-if="answer.image" :src="answer.image" />
  </div>
  <div>
    <span>"X": {{ x }}, "Y": {{ y }}</span>
    <button @click="x++">Increment "x"</button>
    <button @click="y++">Increment "y"</button>
    <button @click="swapXY">Swap "x","y"</button>
  </div>
  <div>
    <span>objX: {{ objX }}</span>
    <button @click="objX.x++">Increment objX.x</button>
    <button @click="objX.foo.count++">Increment objX.foo.count</button>
  </div>
  <div>
    TODO: {{ JSON.stringify(data) }}
    <input id="todo-id" type="number" v-model.number="todoId" disabled />
    <button
      @click="
        todoId++
        todoId++
      "
    >
      Next todo
    </button>
  </div>
  <div>
    <button @click="unwatchAll">Unwatch all</button>
  </div>
</template>

<style></style>
