import React, { Component, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from '@material-ui/core/Divider';

import TextField from '@material-ui/core/TextField'

class EditByStringDialog extends Component {
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

    convertSeriesToArrays(series) {
        return series.map(serie => serie.name.concat('\n').concat(
            serie.data.map(point => {
                const newPoint = [new Date(point[0]).toISOString(), ...point.slice(1)]
                return newPoint.join(' ')
            }).join('\n')
        )).join('\n\n')
    }

    render() {
        return (
            <div>
                <Dialog fullScreen open={this.props.isShowing} onClose={() => this.props.cancel()} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Edit</DialogTitle>
                    <Divider variant="fullWidth" />
                    <DialogContent>
                        <TextField
                            //TODO transformar isso aqui em um style
                            className={{ width: '100%' }}
                            id="outlined-dense-multiline"
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
                        <Button onClick={() => this.props.submit(this.state.series)} variant='contained' color='secondary'>
                            Confirm
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default EditByStringDialog