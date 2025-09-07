<script setup lang="ts">
import {ref} from 'vue'

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

interface Props {
  initialTodos: Todo[];
}

const props = defineProps<Props>()

const emit = defineEmits<{
  (e: 'add', todo: Todo): void,
  (e: 'toggle', id: number): void,
  (e: 'remove', id: number): void,
}>()


const todos = ref<Todo[]>(props.initialTodos ?? [])

function addTask(text: string): void {
  const newTodo: Todo = {
    id: Date.now(),
    text,
    done: false,
  }
  todos.value.push(newTodo)
  emit('add', newTodo)
}

function toggleTask(id: number): void {
  const todo = todos.value.find(t => t.id === id)
  if (todo) {
    todo.done = !todo.done
    emit('toggle', id)
  }
}

function removeTask(id: number): void {
  todos.value = todos.value.filter(t => t.id !== id)
  emit('remove', id)
}

const newTask = ref<string>('')

</script>

<template>
  <div>
    <h3>ToDo List</h3>

    <input v-model="newTask" @keyup.enter="addTask(newTask); newTask=''" placeholder="New task..."/>

    <ul>
      <li v-for="todo in todos" :key="todo.id" class="item">
        <span style="text-align: left">
        <slot name="todo" :todo="todo">
          <span :style="{ textDecoration: todo.done ? 'line-through' : 'none' }">
            {{ todo.text }}
          </span>
        </slot>
        </span>
        <span class="actions">
          <button @click="toggleTask(todo.id)">✔</button>
          <button @click="removeTask(todo.id)">❌</button>
        </span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.item {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 8px;
}

.actions {
  display: flex;
  gap: 4px; /* щоб кнопки не злипалися */
}
</style>