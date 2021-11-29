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
      // console.log(data)
      if (data && data.joke) {
        setJoke(data.joke)
      }
      else if (data && data.results) {
        if (data.results[0]) {
          setJoke(data.results[0].joke)
        } else {
          // TODO handle no joke found better.
          setJoke("I don't know a joke about that.")
        }
      }
      // TODO check if data contains more than one entry.
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
        <Dictaphone setData={(data) => setData(data)} setJoke={(text) => setJoke(text)}></Dictaphone>
      </header>
    </div>
  );
}

export default App;
