import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'
import styles from './styles'
import Widget from '../Widget'
import LineChart from '../Chart'
import Fab from '../Fab'
import AddIcon from '@material-ui/icons/Add'
import FormDialog from '../Chart/FormDialog'
import OutlinedNumberField from '../OutlinedNumberField'


class Body extends Component {
    constructor(props) {
        super(props)
        this.state = {
            widgetsData: [
                [1, 5, 3]
            ],
            isShowingDialog: true
        }

        this.showFormDialog = this.showFormDialog.bind(this)
    }

    menuItens() {
        return (
            [{ text: 'Save', click: () => this.showFormDialog() }, { text: 'Export', click: () => console.log(this.state) }]
        )
    }

    //TODO esse isShowingDialog está sempre true, ele não reflete o estado do dialog
    showFormDialog() {
        this.setState(state => ({ isShowingDialog: true }))
    }

    render() {
        return (
            <div className = { this.props.classes.body } >
                <Widget title = 'Chart 1'
                menuItens = { this.menuItens() } >
                    <LineChart widgetData = { this.state.widgetsData[0] }/>
                </Widget >
                <OutlinedNumberField
                label='X'
                value={20}
                callback={(value) => console.log(value) }/>
                <FormDialog isShowing = { this.state.isShowingDialog }/>
                <Fab >
                    <AddIcon />
                </Fab>
            </div >
        )
    }
}

export default withStyles(styles)(Body)