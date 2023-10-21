import { Provider } from 'react-redux'
import { store } from '../../store/store'

export default function EntryPoint() {

    return (
        <Provider store={store}>
            
        </Provider>
    )

}