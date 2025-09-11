<script lang="ts" setup>
import {onMounted} from 'vue'
import {useUsersStore} from '@/stores/users'

const usersStore = useUsersStore()
onMounted(() => usersStore.list())
</script>

<template>
  <section>
    <h2>Users</h2>
    <p v-if="usersStore.loading">Loading…</p>
    <p v-if="usersStore.error">Error: {{ usersStore.error }}</p>

    <ul v-if="usersStore.items.length">
      <li v-for="u in usersStore.items" :key="u.id">
        {{ u.name }} — {{ u.email }}
      </li>
    </ul>
  </section>
</template>
