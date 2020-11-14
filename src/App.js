import React from 'react'

import './App.css';

import Header from './components/Header';
import InvestLibrary from './components/InvestLibrary';

import carteiras from './data'

function App() {
  return (
    <div className="App">
      <Header />
      <InvestLibrary carteiras={carteiras}/>
      {/* <Menu />
      <Conteudo /> */}
    </div>
  );
}

export default App;
