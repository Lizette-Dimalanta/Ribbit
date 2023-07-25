import { useState } from 'react'
import './index.css'
import Logo from './images/reddit-logo.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header className="flex w-full bg-reddit_dark p-2">
      <div className="mx-4">
        <img src={Logo} alt="" className="w-8 h-8"/>
      </div>
      <form action="">
        <input type="text" className="bg-gray-800 h-8"/>
      </form>
    </header>
    </>
  )
}

export default App
