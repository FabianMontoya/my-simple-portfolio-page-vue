<script setup lang="ts">
const emit = defineEmits(['onClose', 'submit']);

const onClose = () => emit('onClose');
</script>
<template>
  <aside v-bind="$attrs">
    <section class="drawer drawer--right px-5">
      <div class="flex justify-end mt-5">
        <font-awesome-icon @click="onClose" icon="fa-solid fa-xmark" />
      </div>
      <section @click="onClose">
        <slot></slot>
      </section>
    </section>
    <div class="drawer-mask" @click="onClose"></div>
  </aside>
</template>
