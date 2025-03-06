<script setup lang="ts">
import { ref, watch } from 'vue';

type Answer = {
  answer: string;
  image: string;
};

const question = ref('question');
const answer = ref<Answer>({ answer: 'Questions usually contain a question mark. ;-)', image: '' });
const loading = ref(false);

watch(question, async (newQuestion, oldQuestion) => {
  if (!newQuestion.includes('?')) {
    answer.value = { answer: 'Questions usually contain a question mark. ;-)', image: '' };
    return;
  }
  loading.value = true;
  answer.value.answer = 'Thinking...';

  try {
    const res = await fetch('https://yesno.wtf/api');
    answer.value = await res.json();
  } catch (error) {
    answer.value.answer = 'Error! Could not reach the API. ' + error;
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <h1>Watchers</h1>
  <p>Ask your question: <input type="text" v-model.lazy="question" /></p>
  <p v-if="loading">Loading...</p>
  <div v-else>
    <p>Here is the answer: {{ answer.answer }}</p>
    <img v-if="answer.image" :src="answer.image" />
  </div>
</template>

<style></style>
