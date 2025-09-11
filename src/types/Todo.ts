
export interface ApiTodo {       // те, що реально приходить з API
    userId: number
    id: number
    title: string
    completed: boolean
}

export interface Todo {
    id: number
    text: string
    done: boolean
}

export interface TodoJ {
    id: number
    title: string
    completed: boolean
}
