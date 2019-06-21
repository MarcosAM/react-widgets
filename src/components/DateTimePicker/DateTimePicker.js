import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'
import styles from './styles'
import TextField from '@material-ui/core/TextField'

class DateTimePicker extends Component {

    render() {
        return (
            <TextField
                id="datetime-local"
                label="Next appointment"
                type="datetime-local"
                value={this.props.value}
                className={this.props.classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}
                margin="dense"
                variant='outlined' />
        )
    }
}

export default withStyles(styles)(DateTimePicker)