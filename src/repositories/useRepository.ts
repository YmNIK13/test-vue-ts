import {ref, shallowRef} from "vue";
import type {AxiosError} from "axios";
import {http} from "@/lib/http";

function useRepository<T extends Record<string, any>, K extends keyof T>(
    baseUrl: string,
    idKey: K
) {
    const items = shallowRef<T[]>([])
    const item = ref<T | null>(null)
    const loading = ref(false)
    const error = ref<string | null>(null)

    async function list(params?: Record<string, any>) {
        loading.value = true
        error.value = null

        try {
            const {data} = await http.get<T[]>(baseUrl, {params})
            items.value = data
            return data
        } catch (e) {
            error.value = (e as AxiosError).message
            throw e
        } finally {
            loading.value = false
        }
    }

    async function get(id: T[K]) {

        loading.value = true
        error.value = null

        try {
            const {data} = await http.get<T>(`${baseUrl}/${id as any}`)
            item.value = data
            return data
        } catch (e) {
            error.value = (e as AxiosError).message
            throw e
        } finally {
            loading.value = false
        }
    }


    async function create(payload: Omit<T, K>) {
        loading.value = true;
        error.value = null
        try {
            const {data} = await http.post<T>(baseUrl, payload)
            items.value.push(data)
            return data
        } catch (e) {
            error.value = (e as AxiosError).message;
            throw e
        } finally {
            loading.value = false
        }
    }

    async function update(id: T[K], payload: Partial<Omit<T, K>>) {
        loading.value = true;
        error.value = null
        try {
            const {data} = await http.patch<T>(`${baseUrl}/${id as any}`, payload)
            const idx = items.value.findIndex(x => x[idKey] === id)
            if (idx !== -1) items.value[idx] = data
            if (item.value && item.value[idKey] === id) item.value = data
            return data
        } catch (e) {
            error.value = (e as AxiosError).message;
            throw e
        } finally {
            loading.value = false
        }
    }

    async function remove(id: T[K]) {
        loading.value = true;
        error.value = null
        try {
            await http.delete(`${baseUrl}/${id as any}`)
            items.value = items.value.filter(x => x[idKey] !== id)
            if (item.value && item.value[idKey] === id) item.value = null
        } catch (e) {
            error.value = (e as AxiosError).message;
            throw e
        } finally {
            loading.value = false
        }
    }

    return {items, item, loading, error, list, get, create, update, remove}
}

export default useRepository

