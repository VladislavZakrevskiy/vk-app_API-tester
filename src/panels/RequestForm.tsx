import { FC } from 'react'
import { Panel, PanelHeader, NavIdProps } from '@vkontakte/vkui'
import { BodySection, PanelTabs, QuerySection, usePanelSectionsStore, Sections } from '../components/RequestForm'
import { MainSection } from '../components/RequestForm/RequestSections/MainSection/MainSection'

export const RequestForm: FC<NavIdProps> = ({ id }) => {
    const { currentSection } = usePanelSectionsStore()

    const CurrentSection = () => {
        if (currentSection === Sections.QUERY) return <QuerySection />
        if (currentSection === Sections.BODY) return <BodySection />
        if (currentSection === Sections.MAIN) return <MainSection />
    }

    return (
        <Panel id={id}>
            <PanelHeader>
                <PanelTabs selected={currentSection} />
            </PanelHeader>
            <CurrentSection />
        </Panel>
    )
}
