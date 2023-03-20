<template>
  <h3 class="text-2xl font-semibold text-left" :title="`Header: ${headingText}`">{{ headingText }}</h3>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { faker } from '@faker-js/faker';

defineProps({
  headingText: {
    type: String,
    required: false,
    default: faker.address.city()
  }
});
</script>
