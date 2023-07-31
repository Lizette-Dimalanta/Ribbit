import { useState } from 'react'
import './index.css'
import Header from './components/Header'
import BoardHeader from './components/BoardHeader'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <BoardHeader />
    </>
  )
}

export default App
