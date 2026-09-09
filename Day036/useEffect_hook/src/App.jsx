import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {

  const [count, setCount] = useState(0);
  const [total, updateTotal] = useState(1);

  function handleClick() {
    setCount(count + 1);
  }
  
  // variation 1
  // runs on every render
  // useEffect(() => {
  //   alert("I will run on every render");
  // })

  // variation 2
  // runs only once on initial render
  // useEffect(() => {
  //   alert("I will run only once");
  // }, [])

  // variation 3
  // useEffect(() => {
  //   alert("I will run only when count changes");
  // }, [count])

  // varition 4
  // multiple dependencies
  // useEffect(() => {
  //   alert("I will run only when count or total changes");
  // }, [count, total])

  useEffect(() => {
    alert("I will run only when count changes");

    return () => {
      alert("I will run when count changes or component unmounts");
    } 
  }, [count])


  return (
    <div>

      <button onClick={handleClick}>
        count: {count}
      </button>

      <button onClick={() => updateTotal(total + 1)}>
        total: {total}
      </button>
      <br></br>
      Hello jee
    </div>
  )
}

export default App
