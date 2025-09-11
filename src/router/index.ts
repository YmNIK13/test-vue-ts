import {createRouter, createWebHistory} from 'vue-router'
import type {RouteRecordRaw} from 'vue-router'

import Home from "@/views/Home.vue";
import Profile from "@/views/Profile.vue";
import Test from "@/views/Test.vue";
import Users from "@/views/Users.vue";
import Todos from "@/views/Todos.vue";
import Counter from "@/views/Counter.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/users',
        name: 'users',
        component: Users
    },
    {
        path: '/todos',
        name: 'todos',
        component: Todos
    },
    {
        path: '/counter',
        name: 'counter',
        component: Counter
    },
    {
        path: '/profile/:id',
        name: 'profile',
        component: Profile
    },
    {
        path: '/test',
        name: 'test',
        component: Test
    }
]

const router = createRouter({
    history: createWebHistory(), routes
})

export default router