import {ref} from 'vue'
import axios from 'axios'
import type {Todo, ApiTodo} from '@/types/Todo'

export function useTodos() {
    const todos = ref<Todo[]>([])
    const loading = ref(false)
    const error = ref<string | null>(null)

    async function fetchTodos() {
        loading.value = true
        try {
            const {data} = await axios.get<ApiTodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=15')
            todos.value = data.map((d: ApiTodo) => ({
                id: d?.id,
                text: d?.title,
                done: d?.completed
            }))
        } catch (err) {
            error.value = (err as Error).message
        } finally {
            loading.value = false
        }
    }

    function add(todo: Todo) {
        todos.value.push(todo)
    }

    function toggle(id: number) {
        const t = todos.value.find(t => t.id === id)
        if (t) t.done = !t.done
    }

    function remove(id: number) {
        todos.value = todos.value.filter(t => t.id !== id)
    }

    return {todos, loading, error, fetchTodos, add, toggle, remove}
}
