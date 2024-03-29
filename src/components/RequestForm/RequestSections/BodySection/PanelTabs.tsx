import { Group, Tabs, TabsItem } from '@vkontakte/vkui'
import { BodySections, useBodySectionStore } from '../../store/BodySectionStore'

export const PanelTabs = () => {
    const { setCurrentSection } = useBodySectionStore()

    return (
        <Group>
            <Tabs>
                <TabsItem id={BodySections.JSON} onClick={() => setCurrentSection(BodySections.JSON)}>
                    JSON
                </TabsItem>
                <TabsItem id={BodySections.FORM} onClick={() => setCurrentSection(BodySections.FORM)}>
                    Form
                </TabsItem>
            </Tabs>
        </Group>
    )
}
