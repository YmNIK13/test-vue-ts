<script setup lang="ts">
import {useCounterStore} from "@/stores/counter";

const store = useCounterStore()
</script>

<template>
  <div>
    <h2>{{ store.title }}</h2>
    <p>Count: {{ store.doubleCount }}</p>

    <div class="block-btn">
      <Button @click="store.increment">+ 1</Button>
      <Button @click="store.decrement" severity="warn">- 1</Button>
    </div>
  </div>
</template>

<style scoped>
.block-btn {
  display: flex;
  justify-content: center;
  gap: 10px;
}
</style>