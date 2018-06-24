import {combineReducers} from 'redux'
import addCount from './addCount'
import sidebar from './sidebar'

const rootReducer = combineReducers({
    addCount, sidebar
})

export default rootReducer
