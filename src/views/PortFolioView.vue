<script setup lang="ts">
import { onMounted, computed } from 'vue';
import { useStore } from '@/store';

import BaseButton from '@/components/BaseButton.vue';
import PrincipalLander from '@/components/PrincipalLander.vue';
import Navigator from '@/components/Navigator.vue';

const store = useStore();

const isLoading = computed(() => store.state.photosAlbum.isLoading);
const loadPhotosFromAlbum = () => store.dispatch('photosAlbum/loadPhotosFromAlbum', 5);

onMounted(() => {
  loadPhotosFromAlbum();
});
</script>
<template>
  <article class="w-full">
    <PrincipalLander></PrincipalLander>
    <article class="mt-5 w-full">
      <section class="w-full flex items-center justify-center">
        <BaseButton variant="text">a</BaseButton>
        <BaseButton variant="text">b</BaseButton>
      </section>
      <section class="w-full flex items-center justify-center mt-5">
        <Navigator></Navigator>
      </section>
      <section class="w-full flex items-center justify-center mt-10">
        <BaseButton variant="primary" disabled>Show Me More</BaseButton>
      </section>
    </article>
  </article>
</template>
