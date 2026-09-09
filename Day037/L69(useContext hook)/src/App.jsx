import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ChildA from './components/ChildA'
import react from 'react'

/*
// step 1: create context
export const userContext = react.createContext();

// step2: wrap all the child inside the provider

// step 3: pass the value

// step 4: go inside consumer and consume the value

function App() {

  const [user, setUser] = useState({name: 'moon'});

  return (
    
    <userContext.Provider value={user}>
      <ChildA />
    </userContext.Provider>
  )
}

*/

export const ThemeContext = react.createContext();

function App() {

  const [theme, setTheme] = useState('light');

  return (
    
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div id='container' style={{backgroundColor:theme==='light'?'beige':'green'}}>
        <ChildA />
      </div>
    </ThemeContext.Provider>
  )
}


export default App
