import React from 'react'
import { withStyles } from '@material-ui/core'
import Fab from '@material-ui/core/Fab'
import styles from './styles'


const FloatingActionButton = ({ classes, children, onClick }) => (
    <Fab onClick={onClick} color="secondary" aria-label="Add" className={[classes.fab, 'unprintable']}>
        {children}
    </Fab>
)

export default withStyles(styles)(FloatingActionButton)