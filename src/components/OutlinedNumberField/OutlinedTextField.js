import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'
import styles from './styles'
import TextField from '@material-ui/core/TextField'

class OutlinedTextField extends Component {
    render() {
        const { value, onChange } = this.props
        const { textField } = this.props.classes

        return (
            <TextField
                value={value}
                onChange={onChange}
                className={textField}
                margin="dense"
                variant="outlined"
            />
        )
    }
}

export default withStyles(styles)(OutlinedTextField)