<template>
  <div class="grid grid-cols-4 gap-4" title="Gallery">
    <Image v-for="(img, key) in imgs" :key="key" />
  </div>
</template>

<script lang="ts" setup>
import { defineProps, PropType } from "vue";
import { faker } from "@faker-js/faker";
import Image from "../../atoms/Image/Image.vue";

defineProps({
  imgs: {
    type: Object as PropType<Array<string>>,
    default: new Array(12).fill(true).map(() => faker.image.food())
  }
});
</script>
