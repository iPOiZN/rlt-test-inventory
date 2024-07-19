<script setup lang="ts">
// import { ItemService } from '@/api/items'
import IconClose from '@/components/Icons/IconClose.vue'
import TableCardBtn from '@/components/Table/TableCardBtn.vue'
import TableCardInput from '@/components/Table/TableCardInput.vue'
import TableGhost from '@/components/Table/TableGhost.vue'
import TableImage from '@/components/Table/TableImage.vue'
import { useAsideStore } from '@/stores/aside'
import { useItemsStore } from '@/stores/items'
import type { IItems } from '@/types/items.interface'
import { ref } from 'vue'

defineProps<{ item: IItems }>()

const isDelete = ref(false)
const count = ref(0)
const itemsStore = useItemsStore()
const asideStore = useAsideStore()

// async function deleteItem(id: string, count: number) {
//   await ItemService.decreaseCount(id, count)
//   // getItems()
// }

const handleDelete = (id: string, count: number) => {
  if (isDelete.value) {
    // deleteItem(id, count)
    itemsStore.deleteItem(id, count)
    isDelete.value = false
  } else {
    isDelete.value = true
  }
}
</script>
<template>
  <div class="table__card">
    <button class="table__card-close" @click="asideStore.toggle">
      <IconClose />
    </button>
    <div class="table__card-img">
      <TableImage :color="item.color" width="130px" height="130px" />
    </div>
    <hr size="1" color="#4D4D4D" />
    <div class="table__card-main">
      <TableGhost />
    </div>
    <div class="table__card-action">
      <TableCardInput v-if="isDelete" v-model="count" />
      <div class="table__card-action-btns" :class="{ glow: isDelete }">
        <TableCardBtn bg="#fff" @click="isDelete = false" v-if="isDelete">Отмена</TableCardBtn>
        <TableCardBtn
          :styleType="isDelete && count < 1 ? 'disabled' : 'danger'"
          @click="handleDelete(item.id, count)"
        >
          {{ isDelete ? 'Подтвердить' : 'Удалить предмет' }}
        </TableCardBtn>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.table__card {
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  &-close {
    position: absolute;
    right: 10px;
    top: 14px;
  }
  &-img {
    width: 100%;
    min-height: 170px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding: 0 15px;
  }
  &-main {
    padding: 0 15px;
    flex-grow: 1;
  }
  &-action {
    width: 100%;
    position: absolute;
    bottom: 0;
    background-color: var(--card-bg);
    border-top: 1px solid var(--border);
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    &-btns {
      display: flex;
      align-items: center;
      gap: 10px;
      &.glow > button {
        box-shadow: 0 0 20px 0 #fa727280;
      }
    }
  }
}
hr {
  margin-top: 30px;
  margin-bottom: 16px;
}
</style>
