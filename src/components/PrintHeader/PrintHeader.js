import React from 'react'
import logo from '../../img/delfos-logo.svg'
import styles from './styles'
import { withStyles } from '@material-ui/core'

const PrintHeader = ({ classes }) => (
    <div className={[classes.container, 'only-print'].join(' ')}>
        <img className={classes.img} src={logo} alt='Logo' />
    </div >
)

export default withStyles(styles)(PrintHeader)