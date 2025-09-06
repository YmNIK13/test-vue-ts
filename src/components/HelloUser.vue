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
    <div class="block-form">
      <FloatLabel variant="on">
        <input-text id="name" v-model="name" placeholder="name"/>
        <label for="name">Name</label>
      </FloatLabel>
      <FloatLabel variant="on">
        <input-number id="age" v-model="age" type="number" placeholder="age"/>
        <label for="age">Age</label>
      </FloatLabel>
      <Button @click="updateInfo">Update info</Button>
    </div>
  </Panel>
</template>

<style scoped>
.block-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>