import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get("/api/jokes")
    .then((response) => {
      setJokes(response.data);
    })
    .catch((error) => {
      console.error("Error fetching jokes:", error);
    });

  })

  return (
    <div>

      <h1>connecting frontend with backend</h1>
      <p>Jokes: {jokes.length}</p>

      {
        jokes.map((joke, index) => (
          <div key={joke.id}>
            <h2>{joke.title}</h2>
            <p>{joke.content}</p>
          </div>
        ))
      }

    </div>
  )
}

export default App
