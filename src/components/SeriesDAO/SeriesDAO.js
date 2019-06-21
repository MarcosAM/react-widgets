import React, { Component } from 'react'
import axios from 'axios'
import Body from '../Body'

class SeriesDAO extends Component {
    constructor(props) {
        super(props)

        this.state = {
            serie: []
        }
    }

    componentWillMount() {
        this.getSeries()
    }

    async getSeries() {
        const { data: randomSeries } = await axios.get('https://api-2.beta.delfos.im/dummy/random_series')
        const sampleTimeEntries = [...randomSeries.sample_time.entries()]
        const { series } = randomSeries

        const serie = sampleTimeEntries.map(entry => {
            const [index, sampleTime] = entry

            return (
                //[Date.parse(sampleTime.concat(' +00:00')), series[index]]
                [sampleTime.replace(' ', 'T'), series[index]]
            )
        })
        this.setState({ serie })
    }

    render() {
        return (
            <Body serie={this.state.serie} />
        )
    }
}

export default SeriesDAO