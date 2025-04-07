<script setup lang="ts">
import ConditionalSlotsTemplate from '@/components/slots/ConditionalSlotsTemplate.vue';
import FancyButton from '@/components/slots/FancyButton.vue';
import TemplateComponent from '@/components/slots/TemplateComponent.vue';
import ScopedSlotComponent from '../../components/slots/ScopedSlotComponent.vue';
import NamedScopedSlotComponent from '@/components/slots/NamedScopedSlotComponent.vue';

const buttonTitle = 'Click me';
const headerSlotName = 'header';

</script>

<template>
  <h1>Slots</h1>
  <div>Button title: {{ buttonTitle }}</div>
  <div>
    <FancyButton>{{ buttonTitle }}</FancyButton>
  </div>
  <div>
    <FancyButton />
  </div>
  <TemplateComponent>
    <template v-slot:header>
      <h2>Template header</h2>
    </template>
    <template v-slot:default>
      <h3>Template main</h3>
    </template>
    <template v-slot:footer>
      <h4>Footer</h4>
    </template>
  </TemplateComponent>
  <TemplateComponent>
    <template #default>
      Only default slot provided
    </template>
  </TemplateComponent>
  <TemplateComponent>
    <template #header>
      Shorthand header
    </template>
    <template #default>
      Shorthand default
    </template>
    <template #footer>
      Shorthand footer
    </template>
  </TemplateComponent>
  <TemplateComponent>
    <p>A Paragraph for the main content</p>
    <template #header>
      Shorthand header
    </template>
    <template #footer>
      Shorthand footer
    </template>
  </TemplateComponent>
  <ConditionalSlotsTemplate>
    <template #footer>
      <p>Footer conditional slot</p>
    </template>
    <template #[headerSlotName]>
      <p>Header conditional slot</p>
    </template>
  </ConditionalSlotsTemplate>
  <ConditionalSlotsTemplate>
    <template #footer>
      <p>Footer conditional slot</p>
    </template>
    <template #[headerSlotName]>
      <p>Header conditional slot</p>
    </template>
  </ConditionalSlotsTemplate>
  <ConditionalSlotsTemplate>
    <template v-slot:[headerSlotName]>
      <p>Header conditional slot</p>
    </template>
  </ConditionalSlotsTemplate>
  <ScopedSlotComponent v-slot="slotProps">
    <p>Child message is: {{ slotProps.message }}</p>
    <p>Child count is: {{ slotProps.count }}</p>
  </ScopedSlotComponent>
  <ScopedSlotComponent v-slot="{ message, count }">
    {{ message }} {{ count }}
  </ScopedSlotComponent>
  <NamedScopedSlotComponent>
    <template #default="{ message, count }">
      <p>Default slot: {{ message }} {{ count }}</p>
    </template>
    <template #another-slot="anotherSlotProps">
      Another slot: {{ anotherSlotProps.count }}
    </template>
  </NamedScopedSlotComponent>
</template>
