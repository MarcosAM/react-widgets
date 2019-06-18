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

//TODO ele não consegue receber vazios
//TODO deletar o styles porquê ele não está sendo usado para nada
//TODO refatorar isso para uma classe que cuida de todas as séries e várias classes filhas que cuidam de cada classe...talvez
class EditChartDialog extends Component {
    constructor(props) {
        super(props)

        this.state = {
            series: this.props.series
        }

        this.updateSerieValue = this.updateSerieValue.bind(this)
        this.increaseSerie = this.increaseSerie.bind(this)
        this.decreaseSerie = this.decreaseSerie.bind(this)

        this.updateSerieName = this.updateSerieName.bind(this)
    }

    updateSerieValue(value, index, seriesIndex = 0) {
        if (!isNaN(value)) {
            const newData = [...this.state.series[seriesIndex].data.slice(0, index), value, ...this.state.series[seriesIndex].data.slice(index + 1)]

            this.setState(state => ({ series: [...state.series.slice(0, seriesIndex), { name: state.series[seriesIndex].name, data: newData }, ...state.series.slice(seriesIndex + 1)] }))
        }
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
            const newData = [...state.series[seriesIndex].data, 0]

            return ({ series: [...state.series.slice(0, seriesIndex), { name: state.series[seriesIndex].name, data: newData }, ...state.series.slice(seriesIndex + 1)] })
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
                    callback={event => this.updateSerieValue(parseInt(event.target.value), index, seriesIndex)} />
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
        this.setState(state => ({ series: [...state.series.slice(0, seriesIndex), { name: value, data: state.series[seriesIndex].data }, ...state.series.slice(seriesIndex + 1)] }))
    }

    getListItens() {
        const listItens = [...this.state.series.entries()].map(entry => {
            const [index, value] = entry

            return ({
                listItem:
                    <OutlinedTextField
                        value={value.name}
                        onChange={event => this.updateSerieName(event.target.value, index)} />,
                collapseListItens: this.getInputs(value.data, index)
            })
        })

        return [
            ...listItens,
            {
                listItem:
                    <Fragment>
                        <IconButton onClick={() => console.log('Remove série')} aria-label='Remove value to series'>
                            <RemoveIcon />
                        </IconButton>
                        <IconButton onClick={() => console.log('Adiciona série')} aria-label='Add value to series'>
                            <AddIcon />
                        </IconButton>
                    </Fragment>
            }
        ]
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