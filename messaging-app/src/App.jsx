import { useState } from 'react'
import './App.css'
import Login from './pages/Login'

function App() {
  const [count, setCount] = useState(0)
  async function login() {
    const results = await fetch("")


    
  }
  return (
    <>
     <Login />
    </>
  )
}

export default App
