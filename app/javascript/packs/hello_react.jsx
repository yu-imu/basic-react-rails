import React from 'react'// eslint-disable-line
import { render } from 'react-dom'
import * as counter from './containers/index'// eslint-disable-line

document.addEventListener('DOMContentLoaded', () => {
    render (
        <counter.Counter />,
        document.getElementById('hello_react')
    )
})
