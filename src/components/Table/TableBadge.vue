<script setup lang="ts">
defineProps<{ count: number }>()
</script>
<template>
  <div class="table__badge">
    <span>{{ count }}</span>
  </div>
</template>

<style scoped lang="scss">
.table__badge {
  border: 1px solid var(--border);
  border-bottom: none;
  border-right: none;
  position: absolute;
  bottom: 0;
  right: 0;
  color: #ffffff40;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 6px;
  font-size: 10px;
  background-color: var(--card-bg);
}
</style>
