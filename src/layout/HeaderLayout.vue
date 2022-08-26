<script setup lang="ts">
import { computed } from 'vue';
import { useMq } from 'vue3-mq';
import Navigator from '@/components/Navigator.vue';

const mq = useMq();

const isPhone = computed(() => mq.current === 'phone');
</script>
<template>
  <header class="h-20 flex flex-row justify-between items-center px-10">
    <span>LOGO</span>
    <Navigator
      ><li class="nav-item">
        <a href="#">Q</a>
      </li></Navigator
    >
  </header>
</template>
