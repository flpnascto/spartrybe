import './App.css';
import Menu from './components/Menu';
import Conteudo from './components/Conteudo';
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Conteudo />
    </div>
  );
}

export default App;
