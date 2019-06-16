import React from 'react'
import { withStyles } from '@material-ui/core'
import Fab from '@material-ui/core/Fab'
import styles from './styles'


const FloatingActionButton = ({ classes, children }) => (
    <Fab color="primary" aria-label="Add" className={classes.fab}>
        {children}
    </Fab>
)

export default withStyles(styles)(FloatingActionButton)