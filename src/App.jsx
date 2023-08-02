import { useState } from 'react'
import './index.css'
import Header from './components/Header'
import BoardHeader from './components/BoardHeader'
import Avatar from './images/Avatar.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <BoardHeader />

    <div className="bg-reddit_dark px-6 py-4 text-gray-400">
      <div className="border border-reddit_border p-2 rounded-md flex items-start bg-reddit_dark-brighter">
          <img src={Avatar} alt="" className="rounded-full overflow-hidden w-10 h-10" />
        <form action="" className="w-full bg-reddit_dark-brightest border border-reddit_border ml-4 mr-2 rounded-md">
          <input type="text" className="bg-reddit_dark-brightest p-2 px-3 text-sm w-full" placeholder="Create Post" />
        </form>
      </div>
    </div>
    </>
  )
}

export default App
