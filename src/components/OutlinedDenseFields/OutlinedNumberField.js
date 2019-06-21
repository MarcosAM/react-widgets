import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'
import styles from './styles'
import TextField from '@material-ui/core/TextField'

class OutlinedNumberField extends Component {
    render() {
        const { value, label, onChange } = this.props
        const { textField } = this.props.classes

        return (
            <TextField
                label={label}
                value={value}
                onChange={onChange}
                type="number"
                className={textField}
                InputLabelProps={{
                    shrink: true,
                }}
                margin="dense"
                variant="outlined"
            />
        )
    }
}

export default withStyles(styles)(OutlinedNumberField)