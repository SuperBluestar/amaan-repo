<template>
  <VueFinalModal
    class="flex justify-center items-center"
    content-class="flex flex-col max-w-xl mx-4 p-4 bg-white dark:bg-gray-900 border dark:border-gray-700 rounded-lg space-y-2"
  >
    <img :src="imgUrl" alt="">
  </VueFinalModal>
</template>
<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import { VueFinalModal } from "vue-final-modal";
import { faker } from "@faker-js/faker";

defineProps({
  imgUrl: {
    type: String,
    default: faker.image.cats(),
  }
});
</script>
