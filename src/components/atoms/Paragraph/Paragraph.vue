<template>
  <p class="text-lg font-medium text-left" :title="`Paragraph Text: ${paragraphText}`">{{ paragraphText }}</p>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { faker } from '@faker-js/faker';

defineProps({
  paragraphText: {
    type: String,
    required: false,
    default: faker.lorem.paragraph()
  }
});
</script>
