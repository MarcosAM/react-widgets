import React, { Component } from 'react'
import Chart from './Chart'

class LineChart extends Component {

    render() {
        console.log(this.props.series)

        return (
            <Chart data={{
                title: { text: 'My Chart' },
                xAxis: {
                    type: 'datetime',
                },
                plotOptions: {
                    series: {
                        cursor: 'pointer',
                        events: {
                            click: (e) => {
                                console.log('Você clicou no ', e.point)
                            }
                        }
                    }
                },
                //series: { ...this.props.series, ...{ events: { click: () => console.log('Cheguei!') } } }
                series: this.props.series
            }} />
        )
    }
}

export default LineChart