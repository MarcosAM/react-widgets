import React, { Component } from 'react'
import Chart from './Chart'

class LineChart extends Component {

    render() {
        return (
            <Chart data={{ title: { text: 'My Chart' }, xAxis: { type: 'datetime' }, series: this.props.series }} />
        )
    }
}

export default LineChart