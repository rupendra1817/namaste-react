import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='m-10'>Welcome hariom</h1>
      <h1 className="text-3xl font-bold text-blue-300">
        Hello world!
      </h1>
    </>
  )
}

export default App
