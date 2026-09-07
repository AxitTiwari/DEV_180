import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './components/Card'
import Button from './components/Button'

function App() {

  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count+1);
  }

  return (
    <div>

      {/* props as children */}
      <Card name="Axit">

        {/* childern */}
        <h1>All the Best</h1>
        <p>I am the Best</p>
      </Card>

      <Card>
        <p>Hey dear beautiful sahil, don't worry this is just a part of life.</p>
      </Card>

       {/* props as function */}
      <Button handleClick={handleClick} text="click me" >
        <h1> {count} </h1>
      </Button>
    </div>
  )
}

export default App
