import logo from './logo.svg';
import './App.css';
import { getRandomJoke } from './services/icanhazdadjoke';
import React, { useState, useEffect } from 'react'
import Dictaphone from './components/Dictaphone';

function App() {
  const [data, setData] = useState({})
  const [joke, setJoke] = useState("Nice to meet you hungry, I'm dad")
  const [button, setButton] = useState(false)

  useEffect(
    () => {
      getRandomJoke()
        .then(
          (response) => {
            setData(response.data)
          }).catch(
            (error) => {
              console.log(error)
      })
    }, [button]
  )

  useEffect(
    () => {
      console.log(data)
      setJoke(data.joke)
    }, [data]
  )

  const onClick = () => {
    button ? setButton(false) : setButton(true)
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {joke}
        </p>
        <button onClick={onClick}>New Random Joke</button>
        <Dictaphone></Dictaphone>
      </header>
    </div>
  );
}

export default App;
