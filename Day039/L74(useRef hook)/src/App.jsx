import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { useRef } from 'react'
import { useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0);

  let val = useRef(0);

  let btnRef = useRef();

  function handleClick() {

    val.current += 1;

    console.log(val.current);
    setCount(count+1);
  }

  useEffect( () => {
    console.log("lets re-render");
  })

  function changeColor() {
    const colors = [
      "#FFB3BA", // Light Pink
      "#FFDFBA", // Light Orange
      "#FFFFBA", // Light Yellow
      "#BAFFC9", // Light Green
      "#BAE1FF", // Light Blue
      "#D7BAFF", // Light Purple
      "#BAFFF5", // Light Cyan
      "#FFD1DC", // Pastel Pink
    ];

    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    btnRef.current.style.backgroundColor = randomColor;
  }

  return (
    <div className='container'>
      <button onClick={handleClick} ref={btnRef}>
        Increment
      </button>

      <br/>

      <button onClick={changeColor}>
        change color of 1st button
      </button>
      <div>
        count: {count}
      </div>
    </div>
  )
}

export default App
