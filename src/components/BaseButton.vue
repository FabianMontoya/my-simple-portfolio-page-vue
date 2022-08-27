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
  return `base-button--${props.variant}`;
});
</script>
<template>
  <button class="base-button" :class="btnClass" v-bind="$attrs">
    <slot />
  </button>
</template>
