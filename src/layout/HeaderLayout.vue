<script setup lang="ts">
import { ref, computed } from 'vue';
import { useMq } from 'vue3-mq';
import Navigator from '@/components/Navigator.vue';
import BaseButton from '@/components/BaseButton.vue';
import Drawer from '@/components/Drawer.vue';

const mq = useMq();

const isPhone = computed(() => mq.current === 'phone');

const openDrawer = ref(false);
</script>
<template>
  <header class="h-20 flex flex-row justify-between items-center px-10">
    <span>LOGO</span>
    <Navigator v-if="!isPhone">
      <li class="nav-item">
        <BaseButton variant="text">
          <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        </BaseButton>
      </li>
    </Navigator>
    <div v-else @click="openDrawer = true">
      <font-awesome-icon icon="fa-solid fa-bars" />
    </div>
    <Drawer v-if="openDrawer" @on-close="openDrawer = false">
      <Navigator class="mt-20">
        <li
          :class="{
            'nav-item': !isPhone,
            'nav-item--mobile': isPhone
          }"
        >
          <BaseButton variant="text">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
          </BaseButton>
        </li>
      </Navigator>
    </Drawer>
  </header>
</template>
