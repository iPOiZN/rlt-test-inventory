<script setup lang="ts">
import GhostItem from '@/components/Ghost/GhostItem.vue'
</script>

<template>
  <div class="ghost">
    <div class="ghost__title">
      <GhostItem height="30px" width="190px" />
    </div>
    <div class="ghost__description">
      <GhostItem height="10px" width="155px" />
      <GhostItem height="10px" width="190px" />
      <GhostItem height="10px" width="170px" />
      <GhostItem height="10px" width="170px" />
      <GhostItem height="10px" width="140px" />
    </div>
    <div class="ghost__text">
      <GhostItem height="10px" width="80px" />
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
  }
  &__description {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin-bottom: 16px;
  }
}
</style>
