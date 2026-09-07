import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  
  // create state, manage state, change state
  const [name, setName] = useState("");

  return (
    <div>
      <Card name={name} setName={setName} title="card1"/>
      {/* <p> inside parent compoent and value of name is: {name}</p> */}

      <Card name={name} setName={setName} title="card2"/>
    </div>
  )
}

export default App
