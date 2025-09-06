import {reactive} from 'vue'
import type {People} from '@/types/People.ts'

const defaultUser: People = {
    id: 0,
    name: 'Anonymous',
    age: 0,
}

export function usePeople() {
    const user = reactive<People>({...defaultUser})

    const updateUser = (newUser: Partial<People>) => {
        Object.assign(user, newUser)
    }

    const resetUser = () => {
        Object.assign(user, defaultUser)
    }

    return {user, updateUser, resetUser}
}