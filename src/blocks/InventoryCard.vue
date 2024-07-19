<script setup lang="ts">
import GhostTemplate from '@/components/Ghost/GhostTemplate.vue'
</script>
<template>
  <div class="card">
    <div class="card__img">
      <img src="/images/main.jpg" alt="" />
    </div>
    <GhostTemplate />
  </div>
</template>

<style scoped lang="scss">
.card {
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 18px 14px;
  flex-shrink: 0;
  background-color: var(--card-bg);

  &__img {
    width: 100%;
    height: 240px;
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 16px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
