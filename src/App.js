import './App.css';
import Menu from './components/Menu';
import Conteudo from './components/Conteudo';
import Header from './components/Header';
import InvestLibrary from './components/InvestLibrary';

import Portfolio from './data'
console.log(Portfolio)
function App() {
  return (
    <div className="App">
      <Header />
      <InvestLibrary portfolio={Portfolio}/>
      <Menu />
      <Conteudo />
    </div>
  );
}

export default App;
