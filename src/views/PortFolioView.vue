<script setup lang="ts">
import { onMounted, computed } from 'vue';
import { useStore } from '@/store';

const store = useStore();

const isLoading = computed(() => store.state.photosAlbum.isLoading);
const loadPhotosFromAlbum = () => store.dispatch('photosAlbum/loadPhotosFromAlbum', 5);

onMounted(() => {
  loadPhotosFromAlbum();
});
</script>
<template>
  <p class="text-7xl text-red-400 icon-50px">hello world</p>
</template>
