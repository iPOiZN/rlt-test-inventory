<script setup lang="ts">
interface IProps {
  styleType?: 'danger' | 'disabled'
  bg?: string
}

defineProps<IProps>()
</script>
<template>
  <button
    class="btn"
    :class="{ danger: styleType === 'danger', disabled: styleType === 'disabled' }"
    :style="{ backgroundColor: bg }"
  >
    <slot />
  </button>
</template>

<style scoped lang="scss">
.btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 11px;
  border-radius: 8px;
  transition: 0.3s opacity, 0.3s background-color;
  &:hover {
    opacity: 0.8;
  }
  &.danger {
    background-color: var(--danger);
    color: var(--white);
  }
  &.disabled {
    background-color: var(--disabled);
    color: var(--black);
    pointer-events: none;
  }
}
</style>
