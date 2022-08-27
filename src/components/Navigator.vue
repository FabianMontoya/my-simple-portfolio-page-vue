<script setup lang="ts">
import { ref, computed } from 'vue';
import { useMq } from 'vue3-mq';
const mq = useMq();

const isPhone = computed(() => mq.current === 'phone');

const items = ref([
  {
    name: 'All',
    to: '#',
    isActive: true
  },
  {
    name: 'Branding',
    to: '#',
    isActive: false
  },
  {
    name: 'Web',
    to: '#',
    isActive: false
  },
  {
    name: 'Photography',
    to: '#',
    isActive: false
  },
  {
    name: 'App',
    to: '#',
    isActive: false
  }
]);
</script>
<template>
  <nav class="flex" :class="[isPhone ? 'justify-center h-full' : 'items-center h-11']">
    <ul class="nav" :class="[isPhone ? 'nav-tabs--mobile' : 'nav-tabs']">
      <li
        v-for="(item, i) in items"
        :key="i"
        :class="{
          active: item.isActive,
          'nav-item': !isPhone,
          'nav-item--mobile': isPhone
        }"
      >
        <a :href="item.to">{{ item.name }}</a>
      </li>
      <slot></slot>
    </ul>
  </nav>
</template>
