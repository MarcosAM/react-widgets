import React, { Component, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from '@material-ui/core/Divider';
import OutlinedNumberField, { OutlinedTextField } from '../OutlinedNumberField'
import styles from './styles'
import { withStyles } from '@material-ui/core'
import NestedList from '../NestedList'
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import DeleteIcon from '@material-ui/icons/Delete'
import DateTimePicker from '../DateTimePicker'

//TODO ele não consegue receber vazios
//TODO deletar o styles porquê ele não está sendo usado para nada
//TODO refatorar isso para uma classe que cuida de todas as séries e várias classes filhas que cuidam de cada classe...talvez
class EditChartDialog extends Component {
    constructor(props) {
        super(props)

        this.state = {
            series: []
        }

        this.updateSerieValue = this.updateSerieValue.bind(this)
        this.increaseSerie = this.increaseSerie.bind(this)
        this.decreaseSerie = this.decreaseSerie.bind(this)

        this.updateSerieName = this.updateSerieName.bind(this)
        this.addSerie = this.addSerie.bind(this)
        this.removeSerie = this.removeSerie.bind(this)
        this.updateArrayAt = this.updateArrayAt.bind(this)
    }


    componentWillReceiveProps(newProps) {
        this.setState({ series: newProps.series })
    }

    updateSerieValue(value, index, seriesIndex = 0) {
        //TODO validar se é número ou não de outra forma
        //if (!isNaN(value)) {
        const newData = [...this.state.series[seriesIndex].data.slice(0, index), value, ...this.state.series[seriesIndex].data.slice(index + 1)]

        this.setState(state => ({ series: [...state.series.slice(0, seriesIndex), { name: state.series[seriesIndex].name, data: newData }, ...state.series.slice(seriesIndex + 1)] }))
        //}
    }

    decreaseSerie(seriesIndex) {
        this.setState(state => {
            const newData = state.series[seriesIndex].data.slice(0, state.series[seriesIndex].data.length - 1)

            //TODO refatorar isso aqui para ser uma função separada
            return ({ series: [...state.series.slice(0, seriesIndex), { name: state.series[seriesIndex].name, data: newData }, ...state.series.slice(seriesIndex + 1)] })
        })
    }

    increaseSerie(seriesIndex) {
        this.setState(state => {
            const newData = [...state.series[seriesIndex].data, [0, Date.now()]]

            return ({ series: this.updateArrayAt(seriesIndex, { name: state.series[seriesIndex].name, data: newData }, state.series) })
        })
    }

    getValueInputs(values, seriesIndex) {

        const inputs = Array.from(values.entries()).map(entry => {
            const [index, value] = entry

            return (
                <Fragment>
                    <OutlinedNumberField
                        key={index}
                        label={`Ponto ${index + 1}:`}
                        value={value[1]}
                        callback={event => this.updateSerieValue([value[0], parseInt(event.target.value)], index, seriesIndex)} />
                    <DateTimePicker value={new Date(value[0]).toISOString().replace('Z', '')} />
                </Fragment>
            )
        })

        return (
            [
                ...inputs,
                <Fragment>
                    <IconButton onClick={() => this.decreaseSerie(seriesIndex)} aria-label='Remove value to series'>
                        <RemoveIcon />
                    </IconButton>
                    <IconButton onClick={() => this.increaseSerie(seriesIndex)} aria-label='Add value to series'>
                        <AddIcon />
                    </IconButton>
                </Fragment>
            ]
        )
    }

    updateSerieName(value, seriesIndex) {
        const newState = { series: this.updateArrayAt(seriesIndex, { name: value, data: this.state.series[seriesIndex].data }, this.state.series) }
        this.setState(state => (newState))
    }

    addSerie() {
        this.setState(state => ({ series: [...state.series, { name: 'New Series', data: [] }] }))
    }

    removeSerie(seriesIndex) {
        this.setState(state => ({ series: [...state.series.slice(0, seriesIndex), ...state.series.slice(seriesIndex + 1)] }))
    }

    getListItens() {
        const listItens = [...this.state.series.entries()].map(entry => {
            const [index, value] = entry

            return ({
                listItem:
                    <Fragment>
                        <OutlinedTextField
                            value={value.name}
                            onChange={event => this.updateSerieName(event.target.value, index)} />
                        <IconButton onClick={() => this.removeSerie(index)} aria-label='Remove serie'>
                            <DeleteIcon />
                        </IconButton>
                    </Fragment>,
                collapseListItens: this.getValueInputs(value.data, index)
            })
        })

        return [
            ...listItens,
            {
                listItem:
                    <Button onClick={() => this.addSerie()} color='primary'>
                        Add New Serie
                    </Button>
            }
        ]
    }

    updateArrayAt(index, obj, arr) {
        return ([...arr.slice(0, index), obj, ...arr.slice(index + 1)])
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