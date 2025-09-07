import {createRouter, createWebHistory} from 'vue-router'
import type {RouteRecordRaw} from 'vue-router'

import Home from "@/views/Home.vue";
import Profile from "@/views/Profile.vue";
import Test from "@/views/Test.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: Home
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