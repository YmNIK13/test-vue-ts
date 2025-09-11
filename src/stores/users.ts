import { defineStore } from 'pinia'
import { useUsersRepo } from '@/repositories/users'

export const useUsersStore = defineStore('users', () => {
    const repo = useUsersRepo()
    return { ...repo }
})
