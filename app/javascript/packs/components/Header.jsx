import React from 'react'
import { AppBar, Typography, Toolbar } from '@material-ui/core'

const Header = () => {
    return (
        <AppBar position='static' color="default">
            <Toolbar>
                <Typography type='title'>
                  テストアプリ
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header
