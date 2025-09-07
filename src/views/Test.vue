<script lang="ts" setup>
import {onMounted} from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
import Counter from "@/components/Counter.vue";
import TodoList from "@/components/TodoList.vue";
import {useTodos} from "@/composables/useTodos.ts";


function handleIncrement(newValue: number) {
  console.log('Counter incremented to', newValue)
}

function handleReset() {
  console.log('Counter reset')
}

const {todos, loading, error, fetchTodos} = useTodos()


onMounted(fetchTodos)
</script>

<template>
  <HelloWorld/>

  <hr/>
  <Counter :start="10" @increment="handleIncrement" @reset="handleReset"/>

  <hr/>
  <div>

    <p v-if="loading">Loading...</p>
    <p v-if="error">Error: {{ error }}</p>

    <TodoList
        v-if="todos.length"
        :initial-todos="todos"

        @add="t => console.log('Added', t)"
        @toggle="id => console.log('Toggled', id)"
        @remove="id => console.log('Removed', id)"
    >
      <template #todo="{ todo }">
        <strong v-if="todo.done">✅ {{ todo.text }}</strong>
        <span v-else>{{ todo.text }}</span>
      </template>
    </TodoList>
  </div>

</template>
