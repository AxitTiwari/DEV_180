import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import {useDispatch, useSelector} from 'react-redux'
import { decrement, increment, reset, incrementByAmount } from './features/counter/countSlice'

function App() {

  const [amount, setAmount] = useState(0);

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleIncrementClick() {
    dispatch(increment());
  }

  function handleDecrementClick() {
    dispatch(decrement())
  }

  function handleResetClick() {
    dispatch(reset());
  }

  function handleAmountClick() {
    dispatch(incrementByAmount(amount));
  }

  return (
    <div className="container">
      <button onClick={handleIncrementClick}>+</button>
      <p>count: {count}</p>
      <button onClick={handleDecrementClick}>-</button>
      <button onClick={handleResetClick}>Reset</button>

      <input 
        type="Number"
        value={amount}
        placeholder='Enter amount'
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleAmountClick}>incre:</button>
    </div>
  )
}

export default App
