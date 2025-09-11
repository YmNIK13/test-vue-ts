import {defineStore} from 'pinia'
import {useTodosRepo} from '@/repositories/todos'

export const useTodosStore = defineStore('todos', () => {
    const repo = useTodosRepo()
    return {...repo}
})
