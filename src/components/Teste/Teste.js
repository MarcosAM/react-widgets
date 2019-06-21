import React, { Component, Fragment } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

//TODO deletar tudo isso aqui
class Teste extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: ''
        }
    }

    componentDidMount() {
        window.splitString = this.splitString
        window.convertArraysToSeries = this.convertArraysToSeries
    }

    splitString(s) {
        return s.split('\n\n')
            .map(splitedString => (splitedString.split('\n')))
    }

    convertArraysToSeries(arrs) {
        return arrs.map(arr => arr.map(a => a.split(' '))).map(a => ({
            name: a[0].join(' '),
            data: [...a.splice(1)].map(a => a.map(n => parseInt(n)))
        }))
    }

    convertSeriesToArrays(series) {
        return series.map(serie => serie.name.concat('\n').concat(
            serie.data.map(point => point.join(' ')).join('\n')
        )).join('\n\n')
    }

    render() {
        return (
            <Fragment>
                <TextField
                    id="outlined-dense-multiline"
                    label="Dense multiline"
                    margin="dense"
                    variant="outlined"
                    onChange={e => this.setState({ value: e.target.value })}
                    multiline />
                <Button onClick={() => console.log(this.convertSeriesToArrays(this.convertArraysToSeries(this.splitString(this.state.value))))}>
                    Convert
                </Button>
            </Fragment>
        )
    }
}

export default Teste