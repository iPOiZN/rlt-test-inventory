<script setup lang="ts">
import { ref } from 'vue'

const count = ref()

defineExpose({ count })
</script>
<template>
  <input class="input" type="number" placeholder="Введите количество" v-model="count" />
</template>

<style scoped lang="scss">
.input {
  width: 100%;
  background: none;
  font-size: 14px;
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: 11px;
  font-weight: bold;
  color: #ffffff70;
  outline: none;
}
</style>
