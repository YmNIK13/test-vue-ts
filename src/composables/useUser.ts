import { ref } from 'vue'
import type { User } from '@/types/User'

export function useUser() {
    const currentUser = ref<User | null>(null)

    const login = (user: User) => {
        currentUser.value = user
    }

    const logout = () => {
        currentUser.value = null
    }

    return { currentUser, login, logout }
}
