<script setup lang="ts">
import GhostItem from '@/components/Ghost/GhostItem.vue'
</script>

<template>
  <div class="ghost">
    <div class="ghost__title">
      <GhostItem height="30px" width="100%" />
    </div>
    <div class="ghost__description">
      <GhostItem height="10px" width="100%" />
      <GhostItem height="10px" width="100%" />
      <GhostItem height="10px" width="100%" />
      <GhostItem height="10px" width="90%" />
      <GhostItem height="10px" width="50%" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.ghost {
  display: flex;
  flex-direction: column;
  align-items: center;
  &__title {
    margin-bottom: 24px;
    width: 100%;
  }
  &__description {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
}
</style>
