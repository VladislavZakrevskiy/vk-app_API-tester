import { FormKeyValue } from '@/components/ui/Form'
import { useURLStore } from '../../store/URLStore'

export const FormJson = () => {
    const { body, setBody } = useURLStore()

    const addQueryItem = () => {
        const newParams = [...body]
        const newId = String(Math.random())
        newParams.push({ isUse: true, value: '', key: '', id: newId, name: newId })
        setBody(newParams)
    }

    const onChange = (type: 'key' | 'value', id: string, value: string) => {
        const newParams = [...body]
        const index = body.findIndex((param) => param.id === id)
        newParams[index][type] = value
        setBody(body)
    }

    const setIsUse = (id: string) => {
        const newParams = [...body]
        const index = body.findIndex((param) => param.id === id)
        newParams[index].isUse = !newParams[index].isUse
        setBody(newParams)
    }

    const deleteIsUse = (id: string) => {
        setBody(body.filter((param) => param.id !== id))
    }

    return (
        <FormKeyValue
            addItem={addQueryItem}
            onDelete={deleteIsUse}
            onInputChange={onChange}
            setIsUse={setIsUse}
            values={body}
        />
    )
}
