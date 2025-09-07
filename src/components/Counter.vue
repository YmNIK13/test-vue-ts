<script setup lang="ts">
import {ref} from 'vue'

interface Props {
  start: number
}

const props = defineProps<Props>()

const emit = defineEmits<{
  (e: 'increment', value: number): void,
  (e: 'decrement', value: number): void,
  (e: 'reset'): void,
}>()

const count = ref<number>(props.start)

function add(): void {
  count.value++
  emit('increment', count.value)
}

function reset(): void {
  count.value = props.start
  emit('reset')
}
</script>

<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="add">+1</button>
    <button @click="reset">Reset</button>
  </div>
</template>

<style scoped>

</style>