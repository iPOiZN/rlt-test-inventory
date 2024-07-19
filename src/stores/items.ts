import { ItemService } from '@/api/items';
import type { IItems } from '@/types/items.interface';
import { defineStore } from 'pinia';
import { ref } from 'vue';


export const useItemsStore = defineStore('items', () => {
  const items = ref<IItems[]>([])
  const selectedItem = ref<IItems | null>(null)

  async function getItems() {
    items.value = await ItemService.getAll()
    return items
  }
  async function deleteItem(id: string, count: number) {
    if (count > selectedItem.value!.count) {
      alert('Вы пытаетесь удалить больше предметов, чем имеется в наличии')
    } else {
      const newCount = selectedItem.value!.count - count
      await ItemService.decreaseCount(id, newCount)
      getItems()
      selectedItem.value!.count = newCount
    //   getItems()
    }
  }

  return { items, getItems, deleteItem, selectedItem }
})