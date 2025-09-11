import useRepository from './useRepository'
import type {TodoJ as Todo} from '@/types/Todo'

export function useTodosRepo() {
    return useRepository<Todo, 'id'>('/todos', 'id')
}
