import Sidebar from '../components/Sidebar'
import {connect} from 'react-redux'
import { page1, page2, page3, page4 } from '../actions/sidebar'
import { bindActionCreators } from 'redux'

function mapStateToProps(state) {
    return state.sidebar
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({page1, page2, page3, page4}, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
