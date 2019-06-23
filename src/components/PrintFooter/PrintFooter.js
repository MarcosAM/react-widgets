import React from 'react'
import styles from './styles'
import { withStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const PrintFooter = ({ classes }) => (
    /*<div className={[classes.container, 'only-print'].join(' ')}>
        <p>Esse relatório irado foi criado pela Delfos</p>
    </div >*/
    <Typography component='div' className={[classes.container, 'only-print'].join(' ')}>
        <Box textAlign='center'>
            Esse relatório irado foi criado pela Delfos
        </Box>
    </Typography>
)

export default withStyles(styles)(PrintFooter)