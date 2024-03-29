import { Group } from '@vkontakte/vkui'
import { FormInput } from '../../Input'
import { IParam } from '@/types/IParam'
import { FC } from 'react'
import { AddButton, DeleteButton, UseButton } from '../../Buttons'

interface FormProps {
    values: IParam[]
    setIsUse: (id: string) => void
    onInputChange: (type: 'key' | 'value', id: string, value: string) => void
    onDelete: (id: string) => void
    addItem: () => void
}

export const FormKeyValue: FC<FormProps> = ({ values, onDelete, onInputChange, setIsUse, addItem }) => {
    return (
        <Group>
            <form>
                {values.map((param) => (
                    <Group
                        id={param.id}
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'auto 1fr 1fr auto',
                            gap: 4,
                        }}
                        key={param.id}
                    >
                        <UseButton onClick={() => setIsUse(param.id)} value={param.isUse} />
                        <FormInput
                            style={{ display: 'flex', alignItems: 'center' }}
                            id={param.id}
                            name={param.name}
                            onChange={(e) => onInputChange('key', param.id, e)}
                            placeholder="Ключ"
                            value={param.key}
                            idPrefix="key-"
                            key={'key-' + param.id}
                        />
                        <FormInput
                            style={{ display: 'flex', alignItems: 'center' }}
                            id={param.id}
                            name={param.name}
                            onChange={(e) => onInputChange('value', param.id, e)}
                            placeholder="Значение"
                            value={param.value}
                            idPrefix="value-"
                            key={'value-' + param.id}
                        />
                        <DeleteButton onClick={() => onDelete(param.id)} />
                    </Group>
                ))}
                <AddButton onClick={addItem} />
            </form>
        </Group>
    )
}
