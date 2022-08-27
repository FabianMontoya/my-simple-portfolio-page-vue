<script setup lang="ts">
import MainLayout from '@/layout/MainLayout.vue';
import PorfolioView from '@/views/PortFolioView.vue';
</script>
<template>
  <MainLayout>
    <PorfolioView />
    <template v-slot:footer>
      <section class="flex flex-row gap-5 text--muted">
        <font-awesome-icon icon="fa-brands fa-facebook-f" />
        <font-awesome-icon icon="fa-brands fa-twitter" />
        <font-awesome-icon icon="fa-solid fa-basketball" />
        <font-awesome-icon icon="fa-brands fa-google-plus-g" />
        <font-awesome-icon icon="fa-brands fa-youtube" />
      </section>
    </template>
  </MainLayout>
</template>
