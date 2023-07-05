import { useState } from 'react'
import './App.css'
import CardComponent from './components/CardComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Posts </h1>
      <CardComponent />
    </>
  )
}

export default App
