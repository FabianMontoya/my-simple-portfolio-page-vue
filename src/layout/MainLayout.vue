<script setup lang="ts">
import { computed } from 'vue';
import { useMq } from 'vue3-mq';
const mq = useMq();

const isPhone = computed(() => mq.current === 'phone');
</script>
<template>
  <main class="h-full flex flex-col justify-between">
    <header class="h-20 flex flex-row justify-between items-center px-10">
      <span>LOGO</span>
      <nav class="h-11 flex items-center">
        <ul class="nav" :class="[isPhone ? 'nav-tabs--mobile' : 'nav-tabs']">
          <li class="nav-item active">
            <a href="#">All</a>
          </li>
          <li class="nav-item">
            <a href="#">Branding</a>
          </li>
          <li class="nav-item">
            <a href="#">Web</a>
          </li>
          <li class="nav-item">
            <a href="#">Photography</a>
          </li>
          <li class="nav-item">
            <a href="#">App</a>
          </li>
          <li class="nav-item">
            <a href="#">Q</a>
          </li>
        </ul>
      </nav>
    </header>
    <section><slot></slot></section>
    <footer class="p-20 h-20 flex flex-col justify-between items-center">
      <p class="text--muted text-xs">© 2016 - <span class="text--primary">Sneak</span> All Right Reserved</p>
      <slot name="footer">Made with ❤️ by Fabian Montoya</slot>
    </footer>
  </main>
</template>
