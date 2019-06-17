import React, { Component, Fragment } from 'react';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import styles from './styles'
import { withStyles } from '@material-ui/core'

import OutlinedNumberField from '../OutlinedNumberField'

class NestedList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            open: false
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(state => ({ open: !state.open }))
    }

    renderListItens() {
        return (
            this.props.listItens.map(listItem => (
                <Fragment>
                    <ListItem button onClick={this.handleClick}>
                        {listItem.listItem}
                        {this.state.open ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    {this.renderCollapseItens(listItem.collapseListItens)}
                </Fragment>
            ))
        )
    }

    renderCollapseItens(collapseItens) {
        return (
            <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {collapseItens.map(collapseItem => (
                        <ListItem button className={this.props.classes.nested}>
                            {collapseItem}
                        </ListItem>
                    ))}
                </List>
            </Collapse>
        )
    }

    render() {
        const { classes } = this.props
        //const { open } = this.state

        return (
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={this.props.subheader}
                className={classes.root}>
                {this.renderListItens()}
                {/*
                <ListItem button onClick={this.handleClick}>
                    {this.props.listItens[0].listItem}
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            {this.props.listItens[0].collapseListItens[0]}
                        </ListItem>
                    </List>
                </Collapse>
                */}
            </List>
        );
    }
}

export default withStyles(styles)(NestedList)