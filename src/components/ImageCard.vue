<script setup lang="ts">
import { ref, computed } from 'vue';

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  imageId: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: ''
  },
  width: {
    type: String,
    default: '300'
  },
  height: {
    type: String,
    default: '300'
  }
});

const isHover = ref(false);
</script>
<template>
  <div class="image-card relative cursor-pointer" @mouseenter="isHover = true" @mouseleave="isHover = false">
    <div v-if="isHover" class="image-card--cover absolute inset-2 flex flex-col justify-center items-center text-center">
      <h1 class="font-bold text-xl mb-2">{{ props.imageId }}</h1>
      <p>{{ props.title }}</p>
    </div>
    <img :src="props.src" :alt="props.alt" :width="props.width ?? '300'" :height="props.height ?? '300'" />
  </div>
</template>
