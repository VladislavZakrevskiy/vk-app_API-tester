import { FormInput } from '@/components/ui/Input'
import { Button, Div, Group, Select } from '@vkontakte/vkui'
import { Method, RESTMethods, useURLStore } from '../../store/URLStore'

export const MainSection = () => {
    const { setURL, URL, sendRequest, method, setMethod } = useURLStore()
    const store = useURLStore()

    return (
        <Group>
            <Div
                style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 5fr',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Select
                    value={method}
                    onChange={(e) => setMethod(e.target.value as Method)}
                    options={RESTMethods.map((method) => ({ label: method, value: method }))}
                />
                <FormInput
                    id={'url'}
                    name={'url'}
                    onChange={(e) => setURL(e)}
                    placeholder="URL"
                    value={URL}
                    idPrefix={'url-'}
                    key="url"
                />
            </Div>
            <Button style={{ width: '100%' }} size="l" onClick={() => sendRequest(store)}>
                Отправить запрос
            </Button>
        </Group>
    )
}
