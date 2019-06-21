import React, { Component } from 'react'
import Chart from './Chart'

class LineChart extends Component {

    render() {
        const convertedSeries = this.props.series.map(serie => ({ ...serie, ...{ data: serie.data.map(point => ([Date.parse(point[0]), point[1]])) } }))
        console.log(convertedSeries)
        return (
            <Chart data={{
                title: { text: 'My Chart' },
                xAxis: {
                    type: 'datetime',
                },
                //series: this.props.series
                series: convertedSeries
            }} />
        )
    }
}

export default LineChart