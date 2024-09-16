import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "../src/components/Card";

function App() {
  const [count, setCount] = useState(0);
 

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Kartik is using Tailwind CSS</h1>
     <Card username="Kartik aur code" designation="SDE"/>
     <Card username="Kartik aur code" designation="SDE"/>
    </>
  )
}

export default App;
