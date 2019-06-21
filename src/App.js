import React from 'react'
import Header from './components/Header'
import Body from './components/Body'

//TODO deletar isso aqui talvez
import SeriesDAO from './components/SeriesDAO/SeriesDAO'
import EditMaterialTable from './components/EditMaterialTable'
import Teste from './components/Teste/Teste'

function App() {
    return (
        <div className="App">
            {/*
            <EditMaterialTable />
            */}
            <Teste />
            <Header title='Delfos' />
            <SeriesDAO />
        </div>
    );
}

export default App;
