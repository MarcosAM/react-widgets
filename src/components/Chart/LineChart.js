import React, { Component } from 'react'
import Chart from './Chart'

class LineChart extends Component {

    /*updateChartData(newData) {
        this.setState((state) => ({
            series: [{
                name: state.series[0].name,
                data: state.series[0].data.reverse()
            }]
        })
        )
    }*/

    render() {
        return (
            <Chart data={{ title: { text: 'My Chart' }, series: [{ name: 'Profits', data: this.props.widgetData }] }} />
        )
    }
}

export default LineChart