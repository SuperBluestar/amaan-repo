<template>
  <img :src="src" alt="Image" @click="() => open()">
  <ModalsContainer />
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import { faker } from "@faker-js/faker";
import { ModalsContainer, useModal } from "vue-final-modal";
import ImageModal from "./ImageModal.vue";

const { open, close } = useModal({
  component: ImageModal,
  attrs: {
    title: 'Hello World!',
    onConfirm() {
      close()
    },
  },
  slots: {
    default: '<p>UseModal: The content of the modal</p>',
  },
})

defineProps({
  src: {
    type: String,
    default: faker.image.cats()
  }
});
</script>