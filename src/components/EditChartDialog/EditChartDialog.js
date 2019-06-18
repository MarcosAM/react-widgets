import React, { Component, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from '@material-ui/core/Divider';
import OutlinedNumberField from '../OutlinedNumberField'
import styles from './styles'
import { withStyles } from '@material-ui/core'
import NestedList from '../NestedList'
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'

//TODO ele não consegue receber vazios
//TODO deletar o styles porquê ele não está sendo usado para nada
class EditChartDialog extends Component {
    constructor(props) {
        super(props)

        this.state = {
            values: this.props.widgetData,
            series: this.props.series
        }

        this.updateValues = this.updateValues.bind(this)
        this.addValue = this.addValue.bind(this)
        this.removeValue = this.removeValue.bind(this)
    }

    updateValues(event, index, seriesIndex = 0) {
        const value = parseInt(event.target.value)

        if (!isNaN(value)) {
            const newData = [...this.state.series[seriesIndex].data.slice(0, index), value, ...this.state.series[seriesIndex].data.slice(index + 1)]

            this.setState(state => ({ series: [...state.series.slice(0, seriesIndex), { name: state.series[seriesIndex].name, data: newData }, ...state.series.slice(seriesIndex + 1)] }))
        }
    }

    /*
    addValue() {
        this.setState(state => ({ values: [...state.values, 0] }))
    }
    */
    removeValue(index) {
        this.setState(state => {
            const newData = state.series[index].data.slice(0, state.series[index].data.length - 1)

            return ({ series: [...state.series.slice(0, index), { name: state.series[index].name, data: newData }, ...state.series.slice(index + 1)] })
        })
    }

    addValue(index) {
        this.setState(state => {
            const newData = [...state.series[index].data, 0]

            return ({ series: [...state.series.slice(0, index), { name: state.series[index].name, data: newData }, ...state.series.slice(index + 1)] })
        })
    }

    getInputs(values, seriesIndex) {

        const inputs = Array.from(values.entries()).map(entry => {
            const [index, value] = entry

            return (
                <OutlinedNumberField
                    key={index}
                    label={`Ponto ${index + 1}:`}
                    value={value}
                    callback={event => this.updateValues(event, index, seriesIndex)} />
            )
        })

        return (
            [
                ...inputs,
                <Fragment>
                    <IconButton onClick={() => this.removeValue(seriesIndex)} aria-label='Remove value to series'>
                        <RemoveIcon />
                    </IconButton>
                    <IconButton onClick={() => this.addValue(seriesIndex)} aria-label='Add value to series'>
                        <AddIcon />
                    </IconButton>
                </Fragment>
            ]
        )
    }

    getListItens() {
        const listItens = [...this.state.series.entries()].map(entry => {
            const [index, value] = entry

            return ({
                listItem: <ListItemText primary={value.name} />,
                collapseListItens: this.getInputs(value.data, index)
            })
        })

        return listItens
    }

    render() {
        return (
            <div>
                <Dialog open={this.props.isShowing} onClose={() => this.props.cancel()} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Edit</DialogTitle>
                    <Divider variant="fullWidth" />
                    <DialogContent>
                        <NestedList
                            listItens={this.getListItens()}
                            subheader={
                                <DialogContentText>
                                    Insert new values for the chart
                                </DialogContentText>
                            }
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => this.props.cancel()} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={() => this.props.submit(this.state.series)} variant='contained' color='secondary'>
                            Confirm
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default withStyles(styles)(EditChartDialog)