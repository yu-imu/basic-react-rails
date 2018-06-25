import React from 'react'
import AddTodo from '../../containers/AddTodo'
import VisibleTodoList from '../../containers/VisibleTodoList'

const Page4 = () => {
    return (
        <div style={{marginLeft: 20, marginTop: 20}}>
            <h1>Page4</h1>
            <AddTodo />
            <VisibleTodoList />
        </div>
    )
}

export default Page4
