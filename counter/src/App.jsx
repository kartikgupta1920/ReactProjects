import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  const addValue = () => {
    setCounter(counter + 1)
  }
  const addValueRemove = () => {
    setCounter(counter - 1)
  }

  return (
    <>
   <h1>Kartik Learnig React Basics </h1>
   <h2>counter Value : {counter}</h2>
   <button onClick={addValue}>Click Me !!!!</button>
   <button onClick={addValueRemove}>Remove me !!!!</button>
   </>
  )
}

export default App
