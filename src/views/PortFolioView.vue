<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useStore } from '@/store';

import BaseButton from '@/components/BaseButton.vue';
import PrincipalLander from '@/components/PrincipalLander.vue';
import Navigator from '@/components/Navigator.vue';
import ImageCard from '@/components/ImageCard.vue';

const store = useStore();

const isLoading = computed(() => store.state.photosAlbum.isLoading);

const albumId = ref(1);
const kindShow = ref('even');
const cardsDistribution = ref('grid');

const photosAlbum = computed(() =>
  kindShow.value === 'even' ? store.getters['photosAlbum/getEvenImages'] : store.getters['photosAlbum/getOddImages']
);
const loadPhotosFromAlbum = () => store.dispatch('photosAlbum/loadPhotosFromAlbum', albumId.value);

onMounted(() => {
  loadPhotosFromAlbum();
});

const nextAlbum = (increment: number) => {
  albumId.value = albumId.value + increment;
  loadPhotosFromAlbum();
};
</script>
<template>
  <article class="w-full">
    <PrincipalLander></PrincipalLander>
    <article class="mt-5 w-full">
      <section class="w-full flex items-center justify-center">
        <BaseButton :variant="cardsDistribution === 'grid' ? 'primary' : 'secondary'" @click="cardsDistribution = 'grid'">
          <font-awesome-icon icon="fa-solid fa-grip" />
        </BaseButton>
        <BaseButton :variant="cardsDistribution === 'list' ? 'primary' : 'secondary'" @click="cardsDistribution = 'list'"
          ><font-awesome-icon icon="fa-solid fa-grip-lines"
        /></BaseButton>
      </section>
      <section class="w-full flex items-center justify-center mt-5">
        <Navigator></Navigator>
      </section>
      <section class="w-full flex flex-col items-center justify-center mt-5">
        <h3 class="font-semibold">Images from album #{{ albumId }}</h3>
        <div class="mb-5">
          <BaseButton variant="text" class="font-semibold" alt="Previous album" :disabled="albumId <= 1" @click="nextAlbum(-1)">
            {{ '<' }}
          </BaseButton>
          <BaseButton variant="text" class="font-semibold" alt="Next album" @click="nextAlbum(1)">{{ '>' }}</BaseButton>
        </div>
        <div v-if="isLoading" class="w-full flex flex-col items-center justify-center h-96">
          <p class="cursor-wait">Loading images...</p>
        </div>
        <div v-else-if="!isLoading && photosAlbum.length == 0" class="w-full flex flex-col items-center justify-center h-96">
          <p>No images available in this album.</p>
        </div>
        <div v-else class="w-full flex flex-col items-center justify-center">
          <div class="space-x-5">
            <BaseButton :variant="kindShow === 'even' ? 'primary' : 'secondary'" @click="kindShow = 'even'">Show even</BaseButton>
            <BaseButton :variant="kindShow === 'odd' ? 'primary' : 'secondary'" @click="kindShow = 'odd'">Show odd</BaseButton>
          </div>
          <div
            class="mt-5 flex w-full justify-center gap-4"
            :class="[cardsDistribution === 'grid' ? 'flex-wrap items-start' : 'flex-col items-center']"
          >
            <ImageCard v-for="(img, i) in photosAlbum" :key="i" :src="img.url" :imageId="img.id" :title="img.title"></ImageCard>
          </div>
        </div>
      </section>
      <section class="w-full flex items-center justify-center mt-10">
        <BaseButton variant="primary">Show Me More</BaseButton>
      </section>
    </article>
  </article>
</template>
