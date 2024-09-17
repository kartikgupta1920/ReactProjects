import { useState } from 'react'
import InputBox from './Components/InputBox'


function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
    <h1 className='text-center text-3xl bg-orange-500'>Currency Convertor</h1>
    <InputBox />
    </div>
  )
}

export default App
