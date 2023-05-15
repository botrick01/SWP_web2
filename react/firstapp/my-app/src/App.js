import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import List from './components/List';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Hollo
        <Button name="patrick"/>
        <List items={["beer", "coke", "wine", "coffee"]}/>
        <Card name="Patrick Johannsen" profession="Schüler" man={true} />
        <Card name="Emanuel Hiebeler" profession="Schülerin" man={false} />
      </header>
    </div>
  );
}

export default App;
