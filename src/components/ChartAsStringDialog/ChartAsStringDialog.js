import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from '@material-ui/core/Divider';

import TextField from '@material-ui/core/TextField'

class ChartAsStringDialog extends Component {
    constructor(props) {
        super(props)

        this.state = {
            series: [],
            stringSeries: []
        }
    }

    componentWillReceiveProps(newProps) {
        this.setState({ series: newProps.series, stringSeries: this.convertSeriesToArrays(newProps.series) })
    }

    splitString(s) {
        return s.split('\n\n')
            .map(splitedString => (splitedString.split('\n')))
    }

    convertArraysToSeries(arrs) {
        return arrs.map(arr => arr.map(a => a.split(' '))).map(a => ({
            name: a[0].join(' '),
            //data: [...a.splice(1)].map(a => a.map(n => !isNaN(parseInt(n)) ? parseInt(n) : n))
            data: [...a.splice(1)].map(a => [...a.entries()].map(n => n[0] === 0 ? n[1] : parseInt(n[1])))
        }))
    }


    convertSeriesToArrays(series) {
        return series.map(serie => serie.name.concat('\n').concat(
            serie.data.map(point => point.join(' ')).join('\n')
        )).join('\n\n')
    }

    render() {
        return (
            <div>
                <Dialog fullScreen open={this.props.isShowing} onClose={() => this.props.cancel()} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">View</DialogTitle>
                    <Divider variant="fullWidth" />
                    <DialogContent>
                        <TextField
                            /*disabled*/
                            label="Chart"
                            margin="dense"
                            variant="outlined"
                            value={this.state.stringSeries}
                            onChange={e => this.setState({ stringSeries: e.target.value })}
                            multiline />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => this.props.cancel()} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={() => this.props.submit(
                            this.convertArraysToSeries(this.splitString(this.state.stringSeries))
                        )} variant='contained' color='secondary'>
                            Confirm
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default ChartAsStringDialog