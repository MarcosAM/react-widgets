import React from 'react'
import Header from './components/Header'
import Body from './components/Body'

//TODO deletar isso aqui talvez
import SeriesDAO from './components/SeriesDAO/SeriesDAO'
import EditMaterialTable from './components/EditMaterialTable'

function App() {
    return (
        <div className="App">
            {/*
            <Header title='Delfos' />
            <SeriesDAO />
            */}
            <EditMaterialTable />
        </div>
    );
}

export default App;
