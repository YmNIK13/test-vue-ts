<script lang="ts" setup>
import HelloWorld from "@/components/HelloWorld.vue";
import Counter from "@/components/Counter.vue";
import TodoList from "@/components/TodoList.vue";


function handleIncrement(newValue: number) {
  console.log('Counter incremented to', newValue)
}

function handleReset() {
  console.log('Counter reset')
}
</script>

<template>
  <HelloWorld/>

  <hr/>
  <Counter :start="10" @increment="handleIncrement" @reset="handleReset"/>

  <hr/>
  <TodoList
      :initial-todos="[
      { id: 1, text: 'Learn Vue 3', done: false },
      { id: 2, text: 'Learn TypeScript', done: true }
    ]"

      @add="t => console.log('Added', t)"
      @toggle="id => console.log('Toggled', id)"
      @remove="id => console.log('Removed', id)"
  >
    <template #todo="{ todo }">
      <strong v-if="todo.done">✅ {{ todo.text }}</strong>
      <span v-else>{{ todo.text }}</span>
    </template>
  </TodoList>

</template>
