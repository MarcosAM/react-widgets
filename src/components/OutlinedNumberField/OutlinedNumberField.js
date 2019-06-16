import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'
import styles from './styles'
import TextField from '@material-ui/core/TextField'

//TODO vamos fazer umas alterações aqui para ver se esse negócio reconhece

class OutlinedTextFields extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 0
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {value} = event.target
        this.setState(state => ({value}))
    }

    render() {
        const {container, textField} = this.props.classes
        const {value} = this.state

        return (
            <form className={container} noValidate autoComplete="off" >
                <TextField
                    id="outlined-number"
                    label="Number"
                    value={value}
                    onChange={this.handleChange}
                    type="number"
                    className={textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    margin="normal"
                    variant="outlined"
                />
            </form>
        )
    }
}

export default withStyles(styles)(OutlinedTextFields)