import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAsideStore = defineStore('aside', () => {
  const isOpen = ref(false)

  const toggle = () => {
    isOpen.value = !isOpen.value
  }

  return {
    isOpen,
    toggle
  }
})
