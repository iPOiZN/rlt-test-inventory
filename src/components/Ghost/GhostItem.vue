<script setup lang="ts">
defineProps<{ height?: string; width?: string, borderRadius?: string }>()
</script>
<template>
  <div class="ghost" :style="{ height: height, width: width, borderRadius: borderRadius }"></div>
</template>

<style scoped lang="scss">
.ghost {
  background-color: #3c3c3c;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: -100%;
    bottom: 0;
    left: -100%;
    background-image: linear-gradient(
      to right,
      rgba(#444, 0) 33.3%,
      rgba(#444, 0.8),
      rgba(#444, 0) 66.6%
    );
    animation: shimmer 1s infinite linear;
  }
}

@keyframes shimmer {
  from {
    transform: translateX(-33.3%);
  }
  to {
    transform: translateX(33.3%);
  }
}
</style>
