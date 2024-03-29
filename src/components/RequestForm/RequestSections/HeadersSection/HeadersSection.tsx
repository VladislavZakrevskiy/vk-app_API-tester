import { FormKeyValue } from '@/components/ui/Form'
import { useURLStore } from '../../store/URLStore'

export const HeadersSection = () => {
    const { headers, setHeaders } = useURLStore()

    const addQueryItem = () => {
        const newHeaders = [...headers]
        const newId = String(Math.random())
        newHeaders.push({ isUse: true, value: '', key: '', id: newId, name: newId })
        setHeaders(newHeaders)
    }

    const onChange = (type: 'key' | 'value', id: string, value: string) => {
        const newHeaders = [...headers]
        const index = headers.findIndex((param) => param.id === id)
        newHeaders[index][type] = value
        setHeaders(newHeaders)
    }

    const setIsUse = (id: string) => {
        const newHeaders = [...headers]
        const index = headers.findIndex((param) => param.id === id)
        newHeaders[index].isUse = !newHeaders[index].isUse
        setHeaders(newHeaders)
    }

    const deleteIsUse = (id: string) => {
        setHeaders(headers.filter((header) => header.id !== id))
    }

    return (
        <FormKeyValue
            addItem={addQueryItem}
            onDelete={deleteIsUse}
            onInputChange={onChange}
            setIsUse={setIsUse}
            values={headers}
        />
    )
}
