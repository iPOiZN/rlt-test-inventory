<script setup lang="ts">
import InventoryCard from '@/blocks/InventoryCard.vue'
import InventoryTable from '@/blocks/InventoryTable.vue'
</script>

<template>
  <div class="inventory">
    <InventoryCard />
    <InventoryTable />
  </div>
</template>

<style scoped lang="scss">
.inventory {
  display: flex;
  gap: 32px;
  margin-bottom: 32px;
}
</style>
