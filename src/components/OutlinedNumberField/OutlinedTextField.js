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
                //label="With placeholder"
                //placeholder="Placeholder"
                value={value}
                onChange={onChange}
                className={textField}
                margin="normal"
                variant="outlined"
            />
        )
    }
}

export default withStyles(styles)(OutlinedTextField)