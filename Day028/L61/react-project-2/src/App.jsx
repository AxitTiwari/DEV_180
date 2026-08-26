import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import UserCard from './components/UserCard'
import shivImg from "./assets/img1.webp"
import brian from "./assets/img2.jpeg"
import badge from "./assets/badge.png"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <UserCard name="Axit Tiwari" desc="calm" img={badge} style={{"border-radius": "10px"}}/>
      <UserCard name="Sam Tiwari" desc="xyz" img={shivImg} style={{"border-radius": "10px"}}/>
      <UserCard name="Moon" desc="sweet" img={brian} style={{"border-radius": "10px"}}/>
    </div>
  )
}

export default App
