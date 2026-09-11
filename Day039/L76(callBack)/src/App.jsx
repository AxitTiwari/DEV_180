import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ChildComponents from './components/childComponents.jsx'

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count+1);
  }

  return (
    <div>
      <div>
        count: {count}
      </div>

      <div>
        <button onClick={handleClick}> click me</button>
      </div>

      <br />

      <div>
        <ChildComponents buttonName="click me" />
      </div>
    </div>
  )
}

export default App
