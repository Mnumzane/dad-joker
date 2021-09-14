import logo from './logo.svg';
import './App.css';
import { getRandomJoke } from './services/icanhazdadjoke';
import { useState } from 'react';

function App() {
  const [data, setData] = useState([])

  const onClick = () => {
    getRandomJoke()
      .then((response) => {
      setData(response)
      }).catch((error) => {
        console.log(error)
      })
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={onClick()}></button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
