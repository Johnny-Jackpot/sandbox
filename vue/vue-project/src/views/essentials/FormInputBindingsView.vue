<script setup lang="ts">
import { ref } from 'vue'

const text = ref()
const message = ref()
const textAreaMessage = ref()
const singleCheckbox = ref(false)
const names = ref(new Set())
const radio = ref()
const singleSelect = ref()
const multipleSelect = ref([])

const selectedFromDynamicOptions = ref()
const dynamicOptions = ref([
  { id: 1, name: 'Jack' },
  { id: 2, name: 'John' },
  { id: 3, name: 'Joe' },
])

const checkboxTrueValue = ref('yes')
const checkboxFalseValue = ref('no')
const checkboxValue = ref('no')

const radio1 = ref('radio1')
const radio2 = ref('radio2')
const myRadio = ref('radio1')

const mySelected = ref()

const lazyText = ref()
const number = ref()
</script>

<template>
  <div style="margin-bottom: 100px">
    <h2>form-input-bindings</h2>
    <div>
      <input
        type="text"
        :value="text"
        @input="(event) => (text = (event.target as HTMLInputElement).value)"
      />
      <p>{{ text }}</p>
    </div>
    <div>
      <p>Message: {{ message }}</p>
      <input type="text" v-model="message" />
    </div>
    <div>
      <span>Multiline message is:</span>
      <p style="white-space: pre-line">{{ textAreaMessage }}</p>
      <textarea v-model="textAreaMessage" placeholder="add multiple lines"></textarea>
    </div>
    <div>
      <input id="singleCheckbox" type="checkbox" v-model="singleCheckbox" />
      <label for="singleCheckbox">{{ singleCheckbox }}</label>
    </div>
    <div>
      <p>Names: {{ names }}</p>

      <input id="jack" type="checkbox" value="Jack" v-model="names" />
      <label for="jack">Jack</label>
      <input id="john" type="checkbox" value="John" v-model="names" />
      <label for="john">John</label>
      <input id="joe" type="checkbox" value="Joe" v-model="names" />
      <label for="joe">Joe</label>
    </div>
    <div>
      <p>Radio value: {{ radio }}</p>

      <input id="jack-radio" type="radio" value="Jack" v-model="radio" />
      <label for="jack-radio">Jack</label>
      <input id="john-radio" type="radio" value="John" v-model="radio" />
      <label for="john-radio">John</label>
    </div>
    <div>
      Selected: {{ singleSelect }}<br />
      <select v-model="singleSelect">
        <option disabled value="">Please select one</option>
        <option>Jack</option>
        <option>John</option>
        <option>Joe</option>
      </select>
    </div>
    <div>
      Selected: {{ multipleSelect }}<br />
      <select v-model="multipleSelect" multiple>
        <option>Jack</option>
        <option>John</option>
        <option>Joe</option>
      </select>
    </div>
    <div>
      Selected from dynamic options: {{ selectedFromDynamicOptions }}<br />
      <select v-model="selectedFromDynamicOptions">
        <option disabled value="">Please select one</option>
        <option v-for="option in dynamicOptions" :value="option.id" :key="option.id">
          {{ option.name }}
        </option>
      </select>
    </div>
    <div>
      <input
        type="checkbox"
        id="my-checkbox"
        v-model="checkboxValue"
        :true-value="checkboxTrueValue"
        :false-value="checkboxFalseValue"
      />
      <label for="my-checkbox">{{ checkboxValue }}</label>
    </div>
    <div>
      <p>My Radio: {{ myRadio }}</p>

      <input id="radio1" type="radio" :value="radio1" v-model="myRadio" />
      <label for="radio1">radio1</label>
      <input id="radio2" type="radio" :value="radio2" v-model="myRadio" />
      <label for="radio2">radio2</label>
    </div>
    <div>
      My Selected: {{ mySelected }}<br />
      <select v-model="mySelected">
        <option disabled value="">Please select one</option>
        <option v-for="option in dynamicOptions" :value="option" :key="option.id">
          {{ option.name }}
        </option>
      </select>
    </div>
    <div>
      <p>Lazy text: {{ lazyText }}</p>
      <input type="text" v-model.lazy.trim="lazyText" />
      <textarea v-model.lazy.trim="lazyText" placeholder="add multiple lines" rows="15"></textarea>
    </div>
    <div>
      <p>Number: {{ number }}</p>
      <input type="text" v-model.number="number" />
    </div>
  </div>
</template>

<style></style>
