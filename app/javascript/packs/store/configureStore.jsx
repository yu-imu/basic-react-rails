import {createStore} from 'redux'
import rootReducer from '../reducers/index'

const configureStore = () => {
    const store = createStore(rootReducer)

    return store
}

export default configureStore
