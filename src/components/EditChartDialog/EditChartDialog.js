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

//TODO ele não consegue receber valores negativos
//TODO deletar o styles porquê ele não está sendo usado para nada
class EditChartDialog extends Component {
    constructor(props) {
        super(props)

        this.state = {
            values: this.props.widgetData
        }

        this.updateValues = this.updateValues.bind(this)
        this.addValue = this.addValue.bind(this)
        this.removeValue = this.removeValue.bind(this)
    }

    updateValues(event, index) {
        const value = parseInt(event.target.value)

        if (!isNaN(value))
            this.setState(state => ({ values: [...state.values.slice(0, index), parseInt(value), ...state.values.slice(index + 1)] }))
    }

    addValue() {
        this.setState(state => ({ values: [...this.state.values, 0] }))
    }

    removeValue() {
        this.setState(state => ({ values: state.values.slice(0, state.values.length - 1) }))
    }

    //TODO parte do pressuposto que só há uma series
    getInputs() {
        const { values } = this.state

        const inputs = Array.from(values.entries()).map(entry => {
            const [index, value] = entry

            return (
                <OutlinedNumberField
                    key={index}
                    label={`Ponto ${index + 1}:`}
                    value={value}
                    callback={event => this.updateValues(event, index)} />
            )
        })

        return (
            [
                ...inputs,
                <Fragment>
                    <IconButton onClick={this.removeValue} aria-label='Remove value to series'>
                        <RemoveIcon />
                    </IconButton>
                    <IconButton onClick={this.addValue} aria-label='Add value to series'>
                        <AddIcon />
                    </IconButton>
                </Fragment>
            ]
        )
    }

    render() {
        return (
            <div>
                <Dialog open={this.props.isShowing} onClose={() => this.props.cancel()} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Edit</DialogTitle>
                    <Divider variant="fullWidth" />
                    <DialogContent>
                        <NestedList
                            listItens={[
                                {
                                    listItem: <ListItemText primary={'Series 1'} />,
                                    collapseListItens: this.getInputs()
                                }
                            ]}
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
                        <Button onClick={() => this.props.submit(this.state.values)} color="secondary">
                            Confirm
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default withStyles(styles)(EditChartDialog)