import React, { Component } from 'react'
import Chart from './Chart'

class LineChart extends Component {

    render() {
        return (
            <Chart data={{ title: { text: 'My Chart' }, series: this.props.series }} />
        )
    }
}

export default LineChart