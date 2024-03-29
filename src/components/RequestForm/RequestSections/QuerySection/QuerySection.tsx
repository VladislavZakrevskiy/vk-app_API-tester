import { FormKeyValue } from '@/components/ui/Form'
import { useURLStore } from '../../store/URLStore'

export const QuerySection = () => {
    const { setParams, params } = useURLStore()

    const addQueryItem = () => {
        const newParams = [...params]
        const newId = String(Math.random())
        newParams.push({ isUse: true, value: '', key: '', id: newId, name: newId })
        setParams(newParams)
    }

    const onChange = (type: 'key' | 'value', id: string, value: string) => {
        const newParams = [...params]
        const index = params.findIndex((param) => param.id === id)
        newParams[index][type] = value
        setParams(params)
    }

    const setIsUse = (id: string) => {
        const newParams = [...params]
        const index = params.findIndex((param) => param.id === id)
        newParams[index].isUse = !newParams[index].isUse
        setParams(newParams)
    }

    const deleteIsUse = (id: string) => {
        setParams(params.filter((param) => param.id !== id))
    }

    return (
        <FormKeyValue
            addItem={addQueryItem}
            onDelete={deleteIsUse}
            onInputChange={onChange}
            setIsUse={setIsUse}
            values={params}
        />
    )
}
