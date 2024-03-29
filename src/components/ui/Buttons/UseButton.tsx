import { Checkbox, Div } from '@vkontakte/vkui'
import { FC } from 'react'

interface UseButtonProps {
    onClick: () => void
    value: boolean
}

export const UseButton: FC<UseButtonProps> = ({ onClick, value }) => {
    return (
        <Div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
            <Checkbox onClick={onClick} type="checkbox" checked={value} />
        </Div>
    )
}
