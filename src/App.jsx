import { useState } from 'react'
import './index.css'
import Header from './components/Header'
import BoardHeader from './components/BoardHeader'
import Avatar from './images/Avatar.png'
import NewPost from './components/NewPost'
import AuthModal from './components/AuthModal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <AuthModal />
      <BoardHeader />
      <NewPost />

      <div className="bg-reddit_dark px-6 text-reddit_text">
        <div className="border border-reddit_border bg-reddit_dark-brighter p-2 rounded-md">
          <h5 className="text-reddit_text-darker text-xs">
            Posted by u/test123 5 hours ago
          </h5>
          <h2 className="text-xl mt-1 mb-2">
            Single Quotes vs Double Quotes? What team are you?
          </h2>
          <p className="text-sm leading-6">
            Two days ago the community vote in favour of Tabs, now is the time for Quotes?
            <br />
            Are you a " or a ' guy/girl/they? Why?
          </p>
        </div>
      </div>
    </>
  )
}

export default App
