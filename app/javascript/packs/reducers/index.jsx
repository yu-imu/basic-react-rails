import {combineReducers} from 'redux'
import addCount from './addCount'
import sidebar from './sidebar'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

const rootReducer = combineReducers({
    addCount, sidebar, todos, visibilityFilter
})

export default rootReducer
