import React from 'react'
import './css/print.css'

import PrintHeader from './components/PrintHeader'
import Header from './components/Header'
import SeriesDAO from './components/SeriesDAO/SeriesDAO'
import PrintFooter from './components/PrintFooter'

function App() {
    return (
        <div className="App">
            <PrintHeader />
            <Header title='Delfos' />
            <SeriesDAO />
            <PrintFooter />
        </div>
    );
}

export default App;
