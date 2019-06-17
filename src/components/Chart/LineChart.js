import React, { Component } from 'react'
import Chart from './Chart'

class LineChart extends Component {

    render() {
        return (
            <Chart data={{ title: { text: 'My Chart' }, series: [{ name: 'Profits', data: this.props.widgetData }] }} />
        )
    }
}

export default LineChart