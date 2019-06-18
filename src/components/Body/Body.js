import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'
import styles from './styles'
import Widget from '../Widget'
import LineChart from '../Chart'
import Fab from '../Fab'
import AddIcon from '@material-ui/icons/Add'
import EditChartDialog from '../EditChartDialog'

class Body extends Component {
    constructor(props) {
        super(props)
        this.state = {
            series: [{
                name: 'Profits',
                data: [1, 5, 3]
            }, {
                name: 'Other Profits',
                data: [2, 3, 8]
            }
            ],
            isShowingDialog: false
        }

        this.setDialogOpen = this.setDialogOpen.bind(this)
        this.updateWidget = this.updateWidget.bind(this)
    }

    menuItens() {
        return (
            [{ text: 'Edit', click: () => this.setDialogOpen(true) }]
        )
    }

    setDialogOpen(open) {
        this.setState(state => ({ isShowingDialog: open }))
    }

    //TODO só vai atualizar o indice 0
    updateWidget(newSeries) {
        this.setState(state => ({ series: newSeries, isShowingDialog: false }))
    }

    render() {
        return (
            <div className={this.props.classes.body} >
                <Widget title='Chart 1'
                    menuItens={this.menuItens()} >
                    <LineChart series={this.state.series} />
                </Widget >
                <EditChartDialog
                    series={this.state.series}
                    isShowing={this.state.isShowingDialog}
                    submit={this.updateWidget}
                    cancel={() => this.setDialogOpen(false)} />
                <Fab >
                    <AddIcon />
                </Fab>
            </div >
        )
    }
}

export default withStyles(styles)(Body)