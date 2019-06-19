import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'
import styles from './styles'
import TextField from '@material-ui/core/TextField'

class OutlinedNumberField extends Component {
    render() {
        const { value, label, callback } = this.props
        const { textField } = this.props.classes

        return (
            <TextField
                label={label}
                value={value}
                onChange={callback}
                type="number"
                className={textField}
                InputLabelProps={{
                    shrink: true,
                }}
                margin="normal"
                variant="outlined"
                
            />
        )
    }
}

export default withStyles(styles)(OutlinedNumberField)