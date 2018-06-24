import React from 'react'// eslint-disable-line
import { render } from 'react-dom'
import App from './components/app'// eslint-disable-line
import { Provider } from 'react-redux'// eslint-disable-line
import configureStore from './store/configureStore'

const store = configureStore()
document.addEventListener('DOMContentLoaded', () => {
    render (
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('hello_react')
    )
})
