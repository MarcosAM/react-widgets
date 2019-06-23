import React, { Component } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVert from '@material-ui/icons/MoreVert'
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core'
import styles from './styles'

class KebabMenu extends Component {
    constructor(props) {
        super(props)

        this.state = {
            anchorEl: null
        }

        this.handleClick = this.handleClick.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.handleMenuItemClick = this.handleMenuItemClick.bind(this)
    }

    handleClick(event) {
        const { currentTarget } = event
        this.setState(state => {
            return { anchorEl: currentTarget }
        })
    }

    handleClose() {
        this.setState(state => ({ anchorEl: null }))
    }

    handleMenuItemClick(fun) {
        fun()
        this.handleClose()
    }

    renderMenuItens(menuItens) {
        return menuItens.map(menuItem => <MenuItem key={Math.random()} onClick={(e) => this.handleMenuItemClick(menuItem.click)}>{menuItem.text}</MenuItem>)
    }

    render() {
        return (
            <div>
                <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={this.handleClick}>
                    <MoreVert />
                </IconButton>
                <Menu
                    anchorEl={this.state.anchorEl}
                    keepMounted
                    open={Boolean(this.state.anchorEl)}
                    onClose={this.handleClose}
                >
                    {this.renderMenuItens(this.props.menuItens)}
                </Menu>
            </div>
        );
    }

}

export default withStyles(styles)(KebabMenu)