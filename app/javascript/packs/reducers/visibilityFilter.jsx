import { SHOW_ALL } from '../actions/todo'
const initialState ={}

export default function visibilityFilter (state = SHOW_ALL, action){
    switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
        return action.filter
    default:
        return state
    }
}
