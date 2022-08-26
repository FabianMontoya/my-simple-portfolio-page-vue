<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validators: (value) => ['primary', 'secondary', 'text'].includes(value)
  }
});

const btnClass = computed(() => {
  return `baseButton--${props.variant}`;
});
</script>
<template>
  <button class="baseButton" :class="btnClass" v-bind="$attrs">
    <slot />
  </button>
</template>
