<script setup lang="ts">
import {defineProps} from 'vue'
import {useCounter} from "@/composables/useCounter";

defineProps<{ title: string }>()

const {count, increment} = useCounter()
</script>

<template>
  <div>
    <h2>{{ title }}</h2>
    <p>Count: {{ count }}</p>
    <Button @click="increment">+ 1</Button>
  </div>
</template>

<style scoped>

</style>