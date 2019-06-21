import React, { Component } from 'react'
import Chart from './Chart'

class LineChart extends Component {

    render() {
        const convertedSeries = this.props.series.map(serie =>
            (
                {
                    ...serie,
                    ...{ data: serie.data.map(point => ([Date.parse(point[0]), point[1]])) }
                }
            ))

        return (
            <Chart data={{
                title: { text: 'My Chart' },
                xAxis: {
                    type: 'datetime',
                },
                series: convertedSeries,
                credits: {
                    enabled: false
                }
            }} />
        )
    }
}

export default LineChart