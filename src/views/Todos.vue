<script lang="ts" setup>
import {onMounted} from 'vue'
import {useTodosStore} from '@/stores/todos'

const todosStore = useTodosStore()
onMounted(() => todosStore.list({_limit: 10}))
</script>

<template>
  <section>
    <h2>Todos</h2>
    <p v-if="todosStore.loading">Loading…</p>
    <p v-if="todosStore.error">Error: {{ todosStore.error }}</p>

    <ul v-if="todosStore.items.length">
      <li v-for="t in todosStore.items" :key="t.id">
        <span :style="{ textDecoration: t.completed ? 'line-through' : 'none' }">
          {{ t.title }}
        </span>
        <button @click="todosStore.update(t.id, { completed: !t.completed })">✔</button>
        <button @click="todosStore.remove(t.id)">❌</button>
      </li>
    </ul>
  </section>
</template>
