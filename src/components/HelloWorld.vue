<script lang="ts" setup>
import { ref, reactive, computed } from 'vue'

// ref з типом number
const count = ref<number>(0)

// reactive з інтерфейсом
interface User {
  name: string
  age: number
}
const user = reactive<User>({
  name: 'Anna',
  age: 25
})

// computed з типом string
const greeting = computed<string>(() => `Hello, ${user.name}!`)

// функція з типами параметрів і повернення
function increment(step: number): void {
  count.value += step
}
</script>

<template>
  <div>
    <p>{{ greeting }}</p>
    <p>Count: {{ count }}</p>
    <button @click="increment(1)">+1</button>
    <button @click="increment(5)">+5</button>
  </div>
</template>
