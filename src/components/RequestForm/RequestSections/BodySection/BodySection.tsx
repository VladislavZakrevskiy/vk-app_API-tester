import { TextJson } from './TextJson'
import { useBodySectionStore, BodySections } from '../../store/BodySectionStore'
import { FormJson } from './FormJson'
import { Group } from '@vkontakte/vkui'
import { PanelTabs } from './PanelTabs'

const CurrentSection = ({ section }: { section: BodySections }) => {
    if (section === BodySections.JSON) return <FormJson />
    if (section === BodySections.FORM) return <TextJson />
}

export const BodySection = () => {
    const { currentSection } = useBodySectionStore()

    return (
        <Group>
            <PanelTabs />
            <CurrentSection section={currentSection} />
        </Group>
    )
}
