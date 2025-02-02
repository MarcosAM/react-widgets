import React, { Component, Fragment } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import styles from './styles'
import { withStyles } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton';

class NestedList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            opens: this.props.listItens.map(() => (false))
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(index) {
        this.setState(state => ({ opens: [...state.opens.slice(0, index), !state.opens[index], ...state.opens.slice(index + 1)] }))
    }

    renderExpandIconsAt(index, doesExpand) {
        if (!doesExpand)
            return

        return (
            <IconButton onClick={() => this.handleClick(index)}>
                {this.state.opens[index] ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
        )
    }

    renderListItens() {
        return [...this.props.listItens.entries()].map(entry => {
            const [index, value] = entry

            return (
                <Fragment>
                    <ListItem>
                        {this.renderExpandIconsAt(index, value.collapseListItens)}
                        {value.listItem}
                    </ListItem>
                    {this.renderCollapseItens(value.collapseListItens, index)}
                </Fragment>
            )
        })
    }

    renderCollapseItens(collapseItens, index) {
        if (!collapseItens)
            return

        return (
            <Collapse in={this.state.opens[index]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {collapseItens.map(collapseItem => (
                        <ListItem className={this.props.classes.nested}>
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