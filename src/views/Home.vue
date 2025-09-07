<script setup lang="ts">
import {useRouter} from "vue-router";
import CounterBox from "@/components/CounterBox.vue";
import HelloUser from "@/components/HelloUser.vue";
import CounterPiniaBox from "@/components/CounterPiniaBox.vue";

const router = useRouter()

const goToProfile = () => {
  router.push({name: 'profile', params: {id: 'vasja'}})
}
const goToTest = () => {
  router.push({name: 'test'})
}

</script>

<template>
  <h1>Home</h1>
  <div>
    <HelloUser/>
    <CounterBox title="Лічильник"/>
    <CounterPiniaBox/>
  </div>
  <hr/>
  <Button @click="goToProfile">Go to profile</Button>
  <Button @click="goToTest">Go to Test</Button>
</template>

<style scoped>

</style>