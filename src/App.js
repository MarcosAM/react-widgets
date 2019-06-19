import React from 'react'
import Header from './components/Header'
import Body from './components/Body'

//TODO deletar isso aqui talvez
import SeriesDAO from './components/SeriesDAO/SeriesDAO'

function App() {
    return (
        <div className="App">
            <Header title='Delfos' />
            <SeriesDAO />
            {/*
            <Body />
            */}
        </div>
    );
}

export default App;
