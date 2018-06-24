import Content from '../components/Content'
import {connect} from 'react-redux'

function mapStateToProps(state) {
    return state.sidebar
}

export default connect(mapStateToProps)(Content)
