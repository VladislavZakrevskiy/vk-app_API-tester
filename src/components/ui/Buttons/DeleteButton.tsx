import { Icon20DeleteOutline } from '@vkontakte/icons'
import { Div, IconButton } from '@vkontakte/vkui'
import { FC } from 'react'

interface DeleteProps {
    onClick: () => void
}

export const DeleteButton: FC<DeleteProps> = ({ onClick }) => {
    return (
        <Div>
            <IconButton onClick={onClick}>
                <Icon20DeleteOutline />
            </IconButton>
        </Div>
    )
}
