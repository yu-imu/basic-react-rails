import React from 'react'// eslint-disable-line
import { render } from 'react-dom'
import App from './containers/app'// eslint-disable-line
import { createStore } from 'redux'
import { Provider } from 'react-redux'// eslint-disable-line
import reducer from './reducers/reducer'

const store = createStore(reducer)

document.addEventListener('DOMContentLoaded', () => {
    render (
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('hello_react')
    )
})
