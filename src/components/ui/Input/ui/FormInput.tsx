import { FormItem, Input } from '@vkontakte/vkui'
import { CSSProperties, FC } from 'react'

interface FormInputProps {
    idPrefix?: string
    id: string
    onChange: (e: string) => void
    name: string
    placeholder: string
    value: string
    style?: CSSProperties
}

export const FormInput: FC<FormInputProps> = ({ id, name, onChange, placeholder, value, idPrefix, style }) => {
    return (
        <FormItem htmlFor={idPrefix + id} name={name} style={style}>
            <Input
                style={{ width: '100%' }}
                name={name}
                onChange={(e) => onChange(e.target.value)}
                id={idPrefix + id}
                placeholder={placeholder}
                value={value}
            />
        </FormItem>
    )
}
