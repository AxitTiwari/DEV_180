import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

  function handleClick() {
    alert("I am clicked");
  }

  function handleMouse() {
    alert("BEST");
  }

  function handleInput(e) {
    console.log(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    alert("form submitted");
  }

  return (
    <div>

      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInput} />
        <button type="submit">submit</button>
      </form>

      <p onMouseOver={handleMouse}>i am the --</p>

      <button onClick={handleClick}>
        click me
      </button>
    </div>
  )
}

export default App
