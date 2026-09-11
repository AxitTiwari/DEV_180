import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { useMemo } from 'react'

function App() {
  const [count, setCount] = useState(0);

  const [input, setInput] = useState(0);

  function expensiveTask(num) {
    console.log("expensive task");

    for (let i = 0; i < 1000000000; i++) {}

    return num * 2;
  }

  let doubleValue = useMemo(() => expensiveTask(input), [input]);

  return (
    <div>
      <button onClick={() => setCount(count+1)}>
        Increment
      </button>

      <div>
        count: {count}
      </div>

      <input 
        type="number"
        value={input}
        placeholder='enter number'
        onChange={(e) => setInput(e.target.value)}
      />

      <div>
        doublevalue: {doubleValue}
      </div>
    </div>
  )
}

export default App
