import React, { Component } from 'react';
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

//TODO ele não consegue receber valores negativos
class EditChartDialog extends Component {
    constructor(props) {
        super(props)

        this.state = {
            values: this.props.widgetData
        }

        this.updateValues = this.updateValues.bind(this)
    }

    componentWillReceiveProps(newProps) {
        this.setState({ values: newProps.widgetData })
    }

    updateValues(event, index) {
        const { value } = event.target
        this.setState(state => ({ values: [...state.values.slice(0, index), ...value, ...state.values.slice(index + 1)] }))
    }

    render() {
        return (
            <div>
                <Dialog open={this.props.isShowing} onClose={() => this.props.cancel()} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Edit</DialogTitle>
                    <Divider variant="fullWidth" />
                    <DialogContent>
                        <DialogContentText>
                            Insert new values for the chart
                        </DialogContentText>
                        <div className={this.props.classes.serieInputsContainer}>
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
                        </div>
                        <NestedList
                            listItens={[
                                { listItem: <ListItemText primary={'Series 1'} />, collapseListItens: [<ListItemText primary="Dando certo" />] },
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
                        <Button onClick={() => this.props.submit(this.state.values)} color="primary">
                            Confirm
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default withStyles(styles)(EditChartDialog)