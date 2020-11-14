import './App.css';
import Menu from './components/Menu';
import Conteudo from './components/Conteudo';
import Header from './components/Header';
import InvestLibrary from './components/InvestLibrary';

import Portfolio from './data'

function App() {
  return (
    <div className="App">
      <Header />
      <InvestLibrary portfolios={Portfolio}/>
      {/* <Menu />
      <Conteudo /> */}
    </div>
  );
}

export default App;
