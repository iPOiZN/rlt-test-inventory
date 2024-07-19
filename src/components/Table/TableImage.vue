<script setup lang="ts">
interface IProps {
  width?: string
  height?: string
  color?: string
}
withDefaults(defineProps<IProps>(), {
  width: '100%',
  height: '100%',
  color: '#7faa65'
})
</script>
<template>
  <div class="table__image" :style="{ width: width, height: height }">
    <span :style="{ backgroundColor: color }"></span>
  </div>
</template>

<style scoped lang="scss">
.table__image {
 
  display: flex;
  // align-items: flex-end;
  align-items: center;
  justify-content: center;
  span {
    display: block;
    width: 100%;
    height: 100%;
    background-color: #7faa65;
    position: relative;
    margin-top: 8%;
    margin-left: -8%;
    &:after {
      content: '';
      position: absolute;
      top: -8%;
      left: 8%;
      width: inherit;
      height: inherit;
      background-color: #7faa6535;
      backdrop-filter: blur(12px);
    }
  }
}
</style>
