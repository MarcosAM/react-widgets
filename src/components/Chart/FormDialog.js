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
            open: false
        }
    }

    componentWillReceiveProps(newProps) {
        this.setState({ open: newProps.isShowing })
    }

    handleClickOpen() {
        this.setState({
            open: true
        })
    }

    handleClose() {
        this.setState({
            open: false
        })
    }

    render() {
        return (
            <div>
                <Dialog open={this.state.open} onClose={() => this.handleClose()} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Edit Widget</DialogTitle>
                    <Divider variant="fullWidth" />
                    <DialogContent>
                        <DialogContentText>
                            Insert new values for the chart
                        </DialogContentText>
                        <OutlinedNumberField
                        label='X'
                        value={10}
                        callback={(value) => console.log(value) }/>
                        <OutlinedNumberField
                        label='Y'
                        value={20}
                        callback={(value) => console.log(value) }/>
                        <OutlinedNumberField
                        label='Z'
                        value={30}
                        callback={(value) => console.log(value) }/>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => this.handleClose()} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={() => this.handleClose()} color="primary">
                            Confirm
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default FormDialog