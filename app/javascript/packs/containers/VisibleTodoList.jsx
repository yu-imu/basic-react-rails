import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE, toggleTodo } from '../actions/todo'
const getVisibleTodos = ( todos, filter )=> {
    switch (filter) {
    case SHOW_ALL:
        return todos
    case SHOW_COMPLETED:
        return todos.filter(t => t.completed)
    case SHOW_ACTIVE:
        return todos.filter(t => !t.completed)
    default:
        throw new Error('Unknown filter: ' + filter)

    }

}

function mapStateToProps(state) {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
}

function mapDispatchToProps(dispatch) {
    return {
        toggleTodo: id => dispatch(toggleTodo(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
