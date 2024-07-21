<script setup lang="ts">
import TableAside from '@/components/Table/TableAside.vue'
import TableBadge from '@/components/Table/TableBadge.vue'
import TableCard from '@/components/Table/TableCard.vue'
import TableImage from '@/components/Table/TableImage.vue'
import { useAsideStore } from '@/stores/aside'
import { useItemsStore } from '@/stores/items'
import type { IItems } from '@/types/items.interface'
// import { createFetch } from '@vueuse/core'
import { onMounted, ref } from 'vue'

const items = ref<IItems[]>([])
// const selectedItem = ref<IItems | null>(null)

const itemsStore = useItemsStore()

function handleCellClick(index: number) {
  useAsideStore().isOpen = true
  // selectedItem.value = items.value[index - 1]
  itemsStore.selectedItem = items.value[index - 1]
}

itemsStore.getItems().then((data) => {
  items.value = data.value
})
</script>
<template>
  <div class="table">
    <div class="table__cell" v-for="index in 25" :key="index">
      <div class="table__cell-item" v-if="items[index - 1]" @click="handleCellClick(index)">
        <!-- <div
        class="table__cell-item"
        :class="{ active: itemsStore.selectedItem?.id === items[index - 1]?.id }"
        v-if="items[index - 1]"
        @click="handleCellClick(index)"
      > -->
        <TableImage :color="items[index - 1].color" width="50px" height="50px" />
        <TableBadge :count="items[index - 1]?.count" v-if="items[index - 1]" />
      </div>
    </div>
    <TableAside>
      <TableCard :item="itemsStore.selectedItem" v-if="itemsStore.selectedItem" />
    </TableAside>
  </div>
</template>

<style scoped lang="scss">
.table {
  width: 100%;
  border: 1px solid var(--border);
  border-radius: 12px;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  background-color: var(--card-bg);
  position: relative;
  overflow-x: clip;
  overflow-y: overlay;
  // z-index: 0;
  // flex-wrap: wrap;

  &__cell {
    min-width: 105px;
    height: 100px;
    border: 1px solid var(--border);
    z-index: 0;
    &-item {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      cursor: pointer;
      transition: 0.3s transform;
      z-index: 2;
      &:hover,
      &.active {
        background-color: var(--bg-active);
      }
    }
  }
}
</style>
