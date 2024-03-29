import { Div, ScreenSpinner, SplitLayout } from '@vkontakte/vkui'
import { RequestForm, ResponseViewer } from './panels'
import { useURLStore } from './components/RequestForm'

export const App = () => {
    const { isLoading } = useURLStore()

    return (
        <SplitLayout popout={isLoading ? <ScreenSpinner size="large" /> : null}>
            <Div style={{ display: 'flex', flexDirection: 'column' }}>
                <RequestForm id="req" />
                <ResponseViewer id="res" />
            </Div>
        </SplitLayout>
    )
}
