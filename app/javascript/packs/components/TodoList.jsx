import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

export default class TodoList extends React.Component {
    render() {
        const {todos, toggleTodo} = this.props
        return (
            <ul>
                {todos.map(todo =>
                    <Todo
                        key={todo.id}
                        {...todo}
                        onClick={() => toggleTodo(todo.id)}
                    />
                )}
            </ul>
        )
    }
}
TodoList.propTypes = {
    todos: PropTypes.object,
    toggleTodo: PropTypes.func
}
