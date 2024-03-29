import { IParam } from '@/types/IParam'
import axios, { AxiosResponse } from 'axios'
import { create } from 'zustand'

export type Method = 'GET' | 'POST' | 'OPTIONS' | 'DELETE' | 'PUT' | 'PATCH' | 'HEAD'
export const RESTMethods = ['GET', 'POST', 'OPTIONS', 'DELETE', 'PUT', 'PATCH', 'HEAD']

interface URLItems {
    URL: string
    method: Method
    params: IParam[]
    body: IParam[]
    jsonBody: string
    headers: IParam[]

    response: AxiosResponse | null
    isLoading: boolean
    error: string
    isError: boolean
}

interface URLActions {
    setURL: (url: string) => void
    setMethod: (method: Method) => void
    setParams: (params: IParam[]) => void
    setBody: (body: IParam[]) => void
    setJsonBody: (json: string) => void
    setHeaders: (headers: IParam[]) => void

    sendRequest: (urlData: URLStore) => void
}

type URLStore = URLActions & URLItems

export const useURLStore = create<URLStore>((set) => ({
    URL: '',
    method: 'GET',
    body: [
        {
            id: '1',
            isUse: true,
            key: '',
            name: '1',
            value: '',
        },
    ],
    jsonBody: '{}',
    params: [
        {
            id: '1',
            isUse: true,
            key: '',
            name: '1',
            value: '',
        },
    ],
    error: '',
    isError: false,
    isLoading: false,
    response: null,
    headers: [
        {
            id: '1',
            isUse: true,
            key: '',
            name: '1',
            value: '',
        },
    ],

    setParams: (params) => set(() => ({ params })),
    setBody: (body) =>
        set((store) => {
            const keyValueBody: Record<string, string> = {}
            for (const param of body) {
                if (param.key) {
                    keyValueBody[param.key] = param.value
                }
            }

            return { ...store, body, jsonBody: JSON.stringify(keyValueBody) }
        }),
    setURL: (url: string) => set(() => ({ URL: url })),
    setJsonBody: (jsonBody) => set(() => ({ jsonBody })),
    setMethod: (method) => set(() => ({ method })),
    setHeaders: (headers) => set(() => ({ headers })),

    sendRequest: async (urlData: URLStore) => {
        set({ isError: false, isLoading: false })
        const { URL, jsonBody, method, params, headers } = urlData
        const URLParams: Record<string, string> = {}
        const URLHeaders: Record<string, string> = {}

        for (const header of headers) {
            if (header.isUse && header.key !== '') {
                URLHeaders[header.key] = header.value
            }
        }

        for (const param of params) {
            if (param.isUse && param.key !== '') {
                URLParams[param.key] = param.value
            }
        }

        try {
            set({ isLoading: true })
            const res = await axios({
                method,
                headers: URLHeaders,
                params: URLParams,
                url: URL,
                data: (JSON.parse(jsonBody)),
            })

            set({ response: res, isLoading: false })
        } catch (e) {
            console.log(e)
            set({ isError: true, error: e as string,  isLoading: false })
        }
    },
}))
