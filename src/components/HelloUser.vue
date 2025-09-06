<script setup lang="ts">
import {ref} from 'vue'

const name = ref<string>("")
const age = ref<number | null>(null)

const updateInfo = () => {
  console.log(name.value, age.value)
}

</script>

<template>
  <Panel>

    <FloatLabel variant="on">
      <input-text id="name" v-model="name" placeholder="name"/>
      <label for="name">Name</label>
    </FloatLabel>
    <FloatLabel variant="on">
      <input-number id="age" v-model="age" type="number" placeholder="age"/>
      <label for="age">Age</label>
    </FloatLabel>
    <Button @click="updateInfo">Update info</Button>
  </Panel>
</template>

<style scoped>

</style>