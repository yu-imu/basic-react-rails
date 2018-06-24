import React from 'react'
import PropTypes from 'prop-types'

export default class AddCount extends React.Component {
    render() {
        const {num, handleClick} = this.props
        return (
            <div>
                <span>
                    {num}
                </span>
                <button onClick={handleClick}>増加</button>
            </div>
        )
    }
}
AddCount.PropTypes = {
    num: PropTypes.number,
    handleClick: PropTypes.func
}
