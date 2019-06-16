import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import style from './style'
import { withStyles } from '@material-ui/core'

const SearchAppBar = ({ title, classes }) => (
    <div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
                <Typography className={classes.title} variant="h6" noWrap>
                    {title}
                </Typography>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'Search' }}
                    />
                </div>
            </Toolbar>
        </AppBar>
    </div>
);

export default withStyles(style)(SearchAppBar)