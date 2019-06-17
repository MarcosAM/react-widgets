import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'
import styles from './styles'
import Widget from '../Widget'
import LineChart from '../Chart'
import Fab from '../Fab'
import AddIcon from '@material-ui/icons/Add'
import FormDialog from '../Chart/FormDialog'


class Body extends Component {
    constructor(props) {
        super(props)
        this.state = {
            widgetsData: [
                [1, 5, 3]
            ],
            isShowingDialog: false
        }

        this.showFormDialog = this.showFormDialog.bind(this)
        this.updateWidget = this.updateWidget.bind(this)
        //this.hideFormDialog = this.hideFormDialog.bind(this)
    }

    menuItens() {
        return (
            [{ text: 'Edit', click: () => this.showFormDialog() }, { text: 'Delete', click: () => console.log(this.state) }]
        )
    }

    showFormDialog() {
        this.setState(state => ({ isShowingDialog: true }))
    }

    /*hideFormDialog() {
        this.setState(state => ({ isShowingDialog: false }))
    }*/

    //TODO só vai atualizar o indice 0
    updateWidget(newData) {
        console.log(newData)
        //this.setState(state => ({ widgetsData: state.widgetsData.splice(0, 1, newData), isShowingDialog: false }))
        //[...state.values.slice(0, index), ...value, ...state.values.slice(index + 1)]
        this.setState(state => ({ widgetsData: [newData], isShowingDialog: false }))
        console.log(this.state)
    }

    render() {
        return (
            <div className={this.props.classes.body} >
                <Widget title='Chart 1'
                menuItens={this.menuItens()} >
                    <LineChart widgetData={this.state.widgetsData[0]} />
                </Widget >
                <FormDialog
                widgetData={this.state.widgetsData[0]}
                isShowing={this.state.isShowingDialog}
                handleClose={this.updateWidget} />
                <Fab >
                    <AddIcon />
                </Fab>
            </div >
        )
    }
}

export default withStyles(styles)(Body)