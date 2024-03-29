import { Icon24Add } from '@vkontakte/icons'
import { Div, IconButton } from '@vkontakte/vkui'
import { FC } from 'react'

interface AddButtonProps {
    onClick: () => void
}

export const AddButton: FC<AddButtonProps> = ({ onClick }) => {
    return (
        <Div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
            <IconButton onClick={onClick}>
                <Icon24Add />
            </IconButton>
        </Div>
    )
}
