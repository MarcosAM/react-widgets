import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import style from './style'
import { withStyles } from '@material-ui/core'

const SearchAppBar = ({ title, classes }) => (
    <div className={classes.root}>
        <AppBar className='unprintable' position="static">
            <Toolbar>
                <Typography className={classes.title} variant="h6" noWrap>
                    {title}
                </Typography>
            </Toolbar>
        </AppBar>
    </div>
);

export default withStyles(style)(SearchAppBar)