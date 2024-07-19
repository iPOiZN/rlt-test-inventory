<script setup lang="ts">
import { useAsideStore } from '@/stores/aside'
</script>
<template>
  <Transition name="aside">
    <aside class="aside" v-if="useAsideStore().isOpen">
      <slot />
    </aside>
  </Transition>
</template>

<style scoped lang="scss">
.aside {
  max-width: 250px;
  width: 100%;
  height: 100%;
  // padding: 15px;
  position: absolute;
  top: 0;
  right: 0;
  background-color: #26262660;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-left: 1px solid var(--border);
  z-index: 1;
}

.aside-enter-active,
.aside-leave-active {
  transition: all 0.3s ease;
}

.aside-enter-from,
.aside-leave-to {
  transform: translateX(100%);
}

.aside-enter-to,
.aside-leave-from {
  transform: translateX(0);
}
</style>
