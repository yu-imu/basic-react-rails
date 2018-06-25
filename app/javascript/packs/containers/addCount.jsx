import React from 'react' // eslint-disable-line
import AddCount from '../components/AddCount'
import { increment } from '../actions/addCount'
import { connect } from 'react-redux'

// if you want to debug? to use debugger
function mapStateToProps(state) {
    return state.addCount
}

function mapDispatchToProps(dispatch) {
    return {
        handleClick: () => { dispatch(increment()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCount)
