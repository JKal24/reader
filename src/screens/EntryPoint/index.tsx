import { Provider } from 'react-redux'
import { store } from '../../lib/store'
import Navigation from '../../navigation'

export default function EntryPoint() {

    return (
        <Provider store={store}>
            <Navigation/>
        </Provider>
    )

}