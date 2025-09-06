<script setup lang="ts">
import {computed} from "vue";
import {useRoute, useRouter} from "vue-router";
import {useUser} from "@/composables/useUser.ts";

const route = useRoute()
const id = computed(() => route.params.id as string)

const router = useRouter()
const goHome = () => {
  router.push({name: 'home'})
}

const {currentUser, login, logout} = useUser()

const fakeUser = {
  id: 1,
  name: id.value,
  email: id.value + '@email.com'
}

const doLogin = () => {
  login(fakeUser)
}

</script>

<template>
  <div>
    <h1>Profile Page</h1>
    <p>People ID: {{ id.toUpperCase() }}</p>
  </div>
  <hr/>


  <button @click="doLogin">Login</button>
  <div v-if="currentUser">
    <p>Id: {{ currentUser.id }}</p>
    <p>Ім’я: {{ currentUser.name }}</p>
    <p>E-mail: {{ currentUser.email }}</p>
    <button @click="logout">Logout</button>
  </div>

  <hr/>
  <Button @click="goHome">Go home</Button>
</template>

<style scoped>

</style>