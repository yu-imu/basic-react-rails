import React from 'react'
import { Button } from '@material-ui/core'

export default class Sidebar extends React.Component {
    render() {
        const { actions } = this.props
        return (
            <div>
                <h1 style={styles.title}>Menu</h1>
                <p>
                    <Button style = {styles.sidebarButton} onClick={actions.page1}>
                      PAGE1
                    </Button>
                </p>
                <p>
                    <Button style = {styles.sidebarButton} onClick={actions.page2}>
                      PAGE2
                    </Button>
                </p>
                <p>
                    <Button style = {styles.sidebarButton} onClick={actions.page3}>
                      PAGE3
                    </Button>
                </p>
                <p>
                    <Button style = {styles.sidebarButton} onClick={actions.page4}>
                      PAGE4
                    </Button>
                </p>
            </div>
        )
    }
}

const styles = {
    title: {
        textAlign: 'center',
        color: '#FFFFFF'
    },
    sidebarButton: {
        display: 'block',
        width: '100%',
        textAlign: 'left',
        textDecoration: 'none',
        color: '#FFFFFF',
    }
}
