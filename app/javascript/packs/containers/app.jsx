import React from 'react' // eslint-disable-line
import App from '../components/app'
import { increment } from '../actions/app'
import { connect } from 'react-redux'

// if you want to debug? to use debugger
function mapStateToProps(state) {
    return state
}

function mapDispatchToProps(dispatch) {
    return {
        handleClick: () => { dispatch(increment()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
