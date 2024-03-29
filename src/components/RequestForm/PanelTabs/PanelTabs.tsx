import { Cell, Tabs, TabsItem } from '@vkontakte/vkui'
import { FC } from 'react'
import { Sections, usePanelSectionsStore } from '../store/PanelSectionsStore'

interface PanelTabsProps {
    selected: Sections
}

export const PanelTabs: FC<PanelTabsProps> = ({ selected }) => {
    const { setCurrentSection } = usePanelSectionsStore()

    return (
        <Tabs>
            <Cell onClick={() => setCurrentSection(Sections.MAIN)} selected={selected === Sections.MAIN}>
                <TabsItem>Главная</TabsItem>
            </Cell>
            <Cell onClick={() => setCurrentSection(Sections.QUERY)} selected={selected === Sections.QUERY}>
                <TabsItem>Query</TabsItem>
            </Cell>
            <Cell onClick={() => setCurrentSection(Sections.BODY)} selected={selected === Sections.BODY}>
                <TabsItem>Body</TabsItem>
            </Cell>
        </Tabs>
    )
}
