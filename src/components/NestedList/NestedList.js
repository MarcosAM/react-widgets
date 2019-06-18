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
            open: false,
            opens: this.props.listItens.map(() => (false))
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(index) {
        //this.setState(state => ({ open: !state.open }))
        this.setState(state => ({ opens: [...state.opens.slice(0, index), !state.opens[index], ...state.opens.slice(index + 1)] }))
    }

    renderListItens() {
        return [...this.props.listItens.entries()].map(entry => {
            const [index, value] = entry

            return (
                <Fragment>
                    <ListItem button onClick={() => this.handleClick(index)}>
                        {value.listItem}
                        {this.state.opens[index] ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    {this.renderCollapseItens(value.collapseListItens, index)}
                </Fragment>
            )
        })

        /*
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
        */
    }

    renderCollapseItens(collapseItens, index) {
        return (
            <Collapse in={this.state.opens[index]} timeout="auto" unmountOnExit>
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

        return (
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={this.props.subheader}
                className={classes.root}>
                {this.renderListItens()}
            </List>
        );
    }
}

export default withStyles(styles)(NestedList)