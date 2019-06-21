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
        console.log('Iei!')
        window.splitString = this.splitString
        window.convertArraysToSeries = this.convertArraysToSeries
    }

    /*
    splitString(s) {
        return s.split('\n').map(splited => (
            splited.split(' ').map(s => parseInt(s))
        ))
    }
    */

    splitString(s) {
        return s.split('\n\n')
            .map(splitedString => (splitedString.split('\n')))
    }

    convertArraysToSeries(arrs) {
        //console.log(arrs)
        return arrs.map(arr => arr.map(a => a.split(' '))).map(a => ({
            name: a[0].join(' '),
            series: [...a.splice(1)].map(a => a.map(n => parseInt(n)))
        }))
        /*
        return arrs.map(arr => {
            console.log(arr)
            return (
                arr.split(' ').map(s => !isNaN(s) ? parseInt(s) : s)
            )
        })
        */
    }

    /*
    convertArraysToSeries(arrs) {
        return arrs.map(arr => {
            return {
                name: arr[0],
                series: [...arr.splice(1)]
            }
        })
    }
    */

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
                <Button onClick={() => console.log(this.convertArraysToSeries(this.splitString(this.state.value)))}>
                    Convert
                </Button>
            </Fragment>
        )
    }
}

export default Teste