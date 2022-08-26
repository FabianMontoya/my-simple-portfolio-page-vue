<script setup lang="ts">
import MainLayout from '@/layout/MainLayout.vue';
import PorfolioView from '@/views/PortFolioView.vue';
</script>
<template>
  <MainLayout>
    <PorfolioView />
    <template v-slot:footer>
      <p>icons</p>
    </template>
  </MainLayout>
</template>
