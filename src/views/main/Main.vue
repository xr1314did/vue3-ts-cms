<template>
  <div class="main">
    <h2>main: {{ counterStore.counter }} --{{ counterStore.doubleCounter }}</h2>
    <button @click="changeCounter">修改counter</button>
  </div>
</template>

<script lang="ts" setup>
import useCounterStore from '@/store/modules/counter'

const counterStore = useCounterStore()

function changeCounter() {
  counterStore.changeCounterAction(100)
}
</script>

<style lang="less" scoped>
.main {
}
</style>
