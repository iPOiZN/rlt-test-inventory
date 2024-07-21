<script setup lang="ts">
import TableAside from '@/components/Table/TableAside.vue'
import TableBadge from '@/components/Table/TableBadge.vue'
import TableCard from '@/components/Table/TableCard.vue'
import TableImage from '@/components/Table/TableImage.vue'
import { useAsideStore } from '@/stores/aside'
import { useItemsStore } from '@/stores/items'
import type { IItems } from '@/types/items.interface'
import { ref } from 'vue'

const items = ref<IItems[] | null[]>(Array(25).fill(null))
const itemsStore = useItemsStore()

function handleCellClick(index: number) {
  useAsideStore().isOpen = true
  itemsStore.selectedItem = items.value[index]
}

itemsStore.getItems().then((data) => {
  data.value.forEach((item) => {
    if (item.position >= 0 && item.position < items.value.length) {
      items.value[item.position] = item
    }
  })
})

function onDragStart(event: DragEvent, index: number) {
  event.dataTransfer?.setData('text/plain', index.toString())
  event.dataTransfer!.effectAllowed = 'move'
}

function onDragOver(event: DragEvent) {
  event.preventDefault()
}

function onDrop(event: DragEvent, dropIndex: number) {
  event.preventDefault()
  const draggedIndex = event.dataTransfer?.getData('text/plain')
  if (draggedIndex !== null) {
    const draggedIdx = Number(draggedIndex)
    const draggedItem = items.value[draggedIdx]

    if (items.value[dropIndex] === null && draggedIdx !== dropIndex && draggedItem) {
      items.value.splice(draggedIdx, 1, null)
      items.value.splice(dropIndex, 1, draggedItem)
      itemsStore.changePosition(draggedItem.id, dropIndex)
    }
  }
}
</script>

<template>
  <div class="table">
    <div
      class="table__cell"
      v-for="(item, index) in items"
      :key="index"
      draggable="true"
      @dragstart="onDragStart($event, index)"
      @dragover="onDragOver"
      @drop="onDrop($event, index)"
    >
      <div class="table__cell-item" @click="handleCellClick(index)">
        <TableImage v-if="item" :color="item.color" width="50px" height="50px" />
        <TableBadge v-if="item" :count="item.count" />
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

  &__cell {
    min-width: 105px;
    height: 100px;
    border: 1px solid var(--border);

    &-item {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      cursor: pointer;
      transition: 0.3s transform;
      pointer-events: none;
      &:has(.table__image) {
        pointer-events: all;
      }
      &:hover,
      &.active {
        background-color: var(--bg-active);
      }
    }
  }
}
</style>
