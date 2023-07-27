import { useState } from 'react'
import './index.css'
import Logo from './images/reddit-logo.png'
import { BsSearch, BsChatDots, BsBell } from 'react-icons/bs'
import { AiOutlinePlus } from "react-icons/ai"

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
      <BsChatDots className="text-gray-300 w-6 h-6 m-1 mx-2" />
      <BsBell className="text-gray-300 w-6 h-6 m-1 mx-2"/>
      <AiOutlinePlus className="text-gray-300 w-8 h-8 mx-1" />
    </header>
    </>
  )
}

export default App
