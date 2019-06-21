import React from 'react'
import Header from './components/Header'
import SeriesDAO from './components/SeriesDAO/SeriesDAO'

function App() {
    return (
        <div className="App">
            <Header title='Delfos' />
            <SeriesDAO />
        </div>
    );
}

export default App;
