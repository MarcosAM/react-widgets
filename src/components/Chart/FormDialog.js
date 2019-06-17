import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from '@material-ui/core/Divider';
import OutlinedNumberField from '../OutlinedNumberField'

//TODO colocar isso numa pasta própria para ele
class FormDialog extends Component {
    constructor(props) {
        super(props)

        this.state = {
            values: this.props.widgetData
        }

        this.updateValues = this.updateValues.bind(this)
    }

    componentWillReceiveProps(newProps) {
        this.setState({ values: newProps.widgetData })
        console.log(this.state)
    }

    updateValues(event, index) {
        const { value } = event.target
        this.setState(state => ({ values: [...state.values.slice(0, index), ...value, ...state.values.slice(index + 1)] }))
        console.log('O state virou: ', this.state.values)
    }

    render() {
        return (
            <div>
                <Dialog open={this.props.isShowing} onClose={() => this.props.handleClose(this.state.values)} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Edit</DialogTitle>
                    <Divider variant="fullWidth" />
                    <DialogContent>
                        <DialogContentText>
                            Insert new values for the chart
                        </DialogContentText>
                        <OutlinedNumberField
                            label='X'
                            value={this.state.values[0]}
                            callback={event => this.updateValues(event, 0)} />
                        <OutlinedNumberField
                            label='Y'
                            value={this.state.values[1]}
                            callback={event => this.updateValues(event, 1)} />
                        <OutlinedNumberField
                            label='Z'
                            value={this.state.values[2]}
                            callback={event => this.updateValues(event, 2)} />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => this.props.handleClose(this.state.values)} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={() => this.props.handleClose(this.state.values)} color="primary">
                            Confirm
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default FormDialog