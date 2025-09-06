<script setup lang="ts">
import {computed} from "vue";
import {useRoute} from "vue-router";

const id = computed(() => route.params.id)
const route = useRoute()
</script>

<template>
  <div>
    <h1>Profile Page</h1>
    <p>User ID: {{ id.toUpperCase() }}</p>
  </div>
</template>

<style scoped>

</style>