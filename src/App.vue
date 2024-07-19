<script setup lang="ts">
import AppBanner from '@/views/AppBanner.vue'
import AppInventory from '@/views/AppInventory.vue'
import { ref } from 'vue'

const banner = ref(true)
</script>

<template>
  <div class="container">
    <AppInventory />
    <AppBanner @closeBanner="banner = false" :banner="banner" />
  </div>
</template>

<style scoped lang="scss">
.container {
  max-width: 864px;
  margin: 0 auto;
  padding: 32px;

  // grid-column-gap: 0px;
  // grid-row-gap: 0px;
}
</style>
