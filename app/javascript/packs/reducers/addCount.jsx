const initialState = {
    num: 1
}

export default function addCount(state = initialState, action) {
    switch(action.type) {
    case 'INCREMENT':
        return { num: state.num + 1 }
    default:
        return state
    }
}
