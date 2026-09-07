import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import LogOut from './components/LogOut'
import LoginBtn from './components/LoginBtn'

function App() {
  const [isLoggedIn, setLoggedIn] = useState(true);

  // conditional rendering using if-else
  // if (isLoggedIn) {
  //   return (
  //     <LogOut />
  //   )
  // }
  // else {
  //   return (
  //     <LoginBtn />
  //   )
  // }

  // ternary operator
  // return (
  //   <div>
  //     {isLoggedIn ? <LogOut /> : <LoginBtn />}
  //   </div>
  // )

  // logical operator + early return

  if (!isLoggedIn) {
    return (
      <LoginBtn />
    )
  }
  return (
    <div>
      <h1>keep practising</h1>
      <div>
        {isLoggedIn && <LogOut />}
      </div>
    </div>
  )


}

export default App
