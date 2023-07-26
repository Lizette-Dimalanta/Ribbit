import { useState } from 'react'
import './index.css'
import Logo from './images/reddit-logo.png'
import { BsSearch } from 'react-icons/bs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header className="flex w-full bg-reddit_dark p-2">
      <div className="mx-4">
        <img src={Logo} alt="" className="w-[33px] h-[33px]"/>
      </div>
      <form action="" className="bg-reddit_dark-brighter p-1 flex rounded-full border-[1px] border-gray-600">
        <BsSearch className="text-gray-500 h-5 w-5 pl-1 flex self-center"/>
        <input type="text" className="bg-reddit_dark-brighter h-6 text-sm pl-3 focus:outline-none text-white" placeholder="Search"/>
      </form>
    </header>
    </>
  )
}

export default App
