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
                //defaultValue="2017-05-24T10:30"
                value={this.props.value}
                className={this.props.classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}
                variant='outlined' />
        )
    }
}

export default withStyles(styles)(DateTimePicker)