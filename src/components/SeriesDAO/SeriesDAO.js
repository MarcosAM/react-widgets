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
        console.log(randomSeries.series)
        this.setState({ serie: randomSeries.series })
    }

    render() {
        return (
            <Body serie={this.state.serie} />
        )
    }
}

export default SeriesDAO