<script setup lang="ts">
import {computed} from "vue";
import {useRoute, useRouter} from "vue-router";

const route = useRoute()
const id = computed(() => route.params.id as string)

const router = useRouter()
const goHome = () => {
  router.push({name: 'home'})
}
</script>

<template>
  <div>
    <h1>Profile Page</h1>
    <p>User ID: {{ id.toUpperCase() }}</p>
  </div>
  <hr/>
  <Button @click="goHome">Go home</Button>
</template>

<style scoped>

</style>