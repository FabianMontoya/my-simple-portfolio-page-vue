<script setup lang="ts">
import HeaderLayout from './HeaderLayout.vue';

import { computed } from 'vue';
import { useMq } from 'vue3-mq';
const mq = useMq();

const isPhone = computed(() => mq.current === 'phone');
</script>
<template>
  <main class="flex flex-col justify-between">
    <HeaderLayout></HeaderLayout>
    <section><slot></slot></section>
    <footer class="p-20 h-20 flex flex-col justify-between items-center">
      <p class="text--muted text-xs">© 2016 - <span class="text--primary">Sneak</span> All Right Reserved</p>
      <slot name="footer">Made with ❤️ by Fabian Montoya</slot>
    </footer>
  </main>
</template>
