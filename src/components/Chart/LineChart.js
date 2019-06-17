import React, { Component } from 'react'
import Chart from './Chart'

class LineChart extends Component {

    render() {
        const widgetData = this.props.widgetData.map(data => typeof data === 'string' ? parseInt(data) : data)

        return (
            <Chart data={{ title: { text: 'My Chart' }, series: [{ name: 'Profits', data: widgetData }] }} />
        )
    }
}

export default LineChart