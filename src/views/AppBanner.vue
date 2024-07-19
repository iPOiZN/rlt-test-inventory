<script setup lang="ts">
import GhostItem from '@/components/Ghost/GhostItem.vue'
import IconClose from '@/components/Icons/IconClose.vue'

const props = defineProps<{ banner: boolean }>()
</script>
<template>
  <div class="banner" @click.stop="$emit('closeBanner')" v-if="banner">
    <GhostItem height="100%" width="100%" border-radius="12px" />
    <button class="banner__close">
      <IconClose />
    </button>
  </div>
</template>

<style scoped lang="scss">
.banner {
  width: 100%;
  height: 100px;
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 18px;
  background-color: var(--card-bg);
  display: flex;
  gap: 36px;
  position: relative;
  &__close {
    align-self: flex-start;
    svg {
      position: absolute;
      top: 10px;
      right: 10px;
    }
  }
}
</style>
