import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'
import styles from './styles'
import Widget from '../Widget'
import LineChart from '../Chart'
import Fab from '../Fab'
import AddIcon from '@material-ui/icons/Add'
import EditChartDialog from '../EditChartDialog'

//TODO adicionar a possibilidade de alterar nome de widget
class Body extends Component {
    constructor(props) {
        super(props)
        this.state = {
            widgets: [
                [
                    {
                        name: 'Series',
                        data: this.props.serie
                    }
                ]
                /*
                [{
                    name: 'Profits',
                    data: [1, 5, 3]
                }, {
                    name: 'Other Profits',
                    data: [2, 3, 8]
                }],
                [{
                    name: 'Profits',
                    data: [1, 5, 3]
                }, {
                    name: 'Other Profits',
                    data: [2, 3, 8]
                }]
                */
            ],
            isShowingDialog: false,
            editingWidget: 0
        }

        this.setDialogOpen = this.setDialogOpen.bind(this)
        this.updateWidget = this.updateWidget.bind(this)

        this.addWidget = this.addWidget.bind(this)
        this.removeWidget = this.removeWidget.bind(this)

        this.updateArrayAt = this.updateArrayAt.bind(this)
    }

    componentWillReceiveProps(newProps) {
        this.setState({ widgets: [[{ name: 'Series', data: newProps.serie }]] })
    }

    menuItens(widgetIndex) {
        return (
            [{ text: 'Edit', click: () => this.setDialogOpen(true, widgetIndex) }, { text: 'Delete', click: () => this.removeWidget(widgetIndex) }]
        )
    }

    setDialogOpen(open, widgetIndex) {
        this.setState(state => ({ isShowingDialog: open, editingWidget: widgetIndex || this.state.editingWidget }))
    }

    updateWidget(newSeries) {
        const widgets = this.updateArrayAt(this.state.editingWidget, newSeries, this.state.widgets)
        const newState = { widgets, isShowingDialog: false }
        this.setState(newState)
    }

    renderWidgets() {
        const widgets = [...this.state.widgets.entries()]

        return (widgets.map(entry => {
            const [index, value] = entry

            return (
                <Widget
                    title='Chart'
                    menuItens={this.menuItens(index)}>
                    <LineChart series={value} />
                </Widget>
            )
        }))
    }

    renderEditChartDialog() {
        return (
            <EditChartDialog
                series={this.state.widgets[this.state.editingWidget]}
                isShowing={this.state.isShowingDialog}
                submit={this.updateWidget}
                cancel={() => this.setDialogOpen(false)} />
        )
    }

    updateArrayAt(index, obj, arr) {
        return ([...arr.slice(0, index), obj, ...arr.slice(index + 1)])
    }

    addWidget() {
        const widgets = [...this.state.widgets, []]
        const newState = { widgets }
        this.setState(newState)
        /*
        this.setState(newState, () => {
            window.scrollBy(0, window.innerHeight)
            this.setDialogOpen(true, widgets.length - 1)
        })
        */
    }

    removeWidget(index) {
        const widgets = [...this.state.widgets.slice(0, index), ...this.state.widgets.slice(index + 1)]
        console.log(widgets)
        this.setState({ widgets, editingWidget: 0 })
    }

    render() {
        return (
            <div className={this.props.classes.body} >
                {this.renderWidgets()}
                {this.renderEditChartDialog()}
                <Fab onClick={this.addWidget}>
                    <AddIcon />
                </Fab>
            </div >
        )
    }
}

export default withStyles(styles)(Body)