import { Button, Div, Group, Textarea } from '@vkontakte/vkui'
import { useURLStore } from '../../store/URLStore'
import { useEffect, useState } from 'react'
import { useDebounce } from '@/utils/hooks/useDebounce'
import { isJsonValid } from '@/utils/isValidJson'

export const TextJson = () => {
    const [json, setJson] = useState<string>('')
    const [error, setError] = useState<string>('')
    const debouncedJson = useDebounce(json, 2000)
    const { setJsonBody } = useURLStore()

    useEffect(() => {
        if (debouncedJson) {
            if (isJsonValid(debouncedJson)) {
                setJsonBody(debouncedJson)
                setError('')
            } else {
                setError('Невалидный JSON!!!')
            }
        }
    }, [debouncedJson])

    const format = () => {
        setJson((prev) => {
            if (isJsonValid(prev)) {
                const json = JSON.stringify(JSON.parse(prev), null, 4)
                return json
            }
            return prev
        })
    }

    return (
        <Group>
            <Div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                <p style={{ color: 'red', fontSize: 16 }}>{error}</p>
                <Button onClick={format} disabled={!!error} size="s">
                    Форматировать
                </Button>
            </Div>
            <Textarea
                style={{ width: '100%' }}
                rows={30}
                placeholder="Пишите JSON для body"
                value={json}
                onChange={(e) => setJson(e.target.value)}
            />
        </Group>
    )
}
