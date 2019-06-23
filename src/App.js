import React from 'react'
import PrintHeader from './components/PrintHeader'
import Header from './components/Header'
import SeriesDAO from './components/SeriesDAO/SeriesDAO'
import './css/print.css'

function App() {
    return (
        <div className="App">
            <PrintHeader />
            <Header title='Delfos' />
            <SeriesDAO />
        </div>
    );
}

export default App;
