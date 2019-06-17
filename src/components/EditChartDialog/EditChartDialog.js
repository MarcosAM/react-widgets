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
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add'

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
    }

    updateValues(event, index) {
        const { value } = event.target

        this.setState(state => ({ values: [...state.values.slice(0, index), parseInt(value), ...state.values.slice(index + 1)] }))
    }

    addValue(event) {
        this.setState(state => ({ values: [...this.state.values, 0] }))
    }

    //TODO parte do pressuposto que só há uma series
    getInputs() {
        const { values } = this.state
        
        const inputs = values.map(value => (<OutlinedNumberField
            key={values.indexOf(value)}
            label={`Ponto ${values.indexOf(value) + 1}:`}
            value={value}
            callback={event => this.updateValues(event, values.indexOf(value))} />)
        )

        return ([...inputs, <IconButton onClick={this.addValue} aria-label='Add value to series'> <AddIcon /> </IconButton>])
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