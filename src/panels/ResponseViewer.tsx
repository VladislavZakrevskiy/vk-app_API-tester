import { useURLStore } from '@/components/RequestForm'
import { Group, NavIdProps, Panel } from '@vkontakte/vkui'
import { FC } from 'react'

export const ResponseViewer: FC<NavIdProps> = ({ id }) => {
    const { response } = useURLStore()

    return (
        <Panel id={id}>
            <Group>
                <p>Ответ Сервера:</p>
                <Group>
                    <p style={{ padding: 5 }}>
                        {response ? JSON.stringify(response?.data, null, '\n') : 'Здесь появится ответ!'}
                    </p>
                </Group>
            </Group>
        </Panel>
    )
}
