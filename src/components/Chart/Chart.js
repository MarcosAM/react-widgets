import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

export default ({data}) =>
    <HighchartsReact
        highcharts={Highcharts}
        options={data}
    />