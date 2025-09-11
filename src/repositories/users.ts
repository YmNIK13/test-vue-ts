import useRepository from './useRepository'
import type {User} from '@/types/User'

export function useUsersRepo() {
    return useRepository<User, 'id'>('/users', 'id')
}
