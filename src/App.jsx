import { useState } from 'react'
import './index.css'
import Header from './components/Header'
import BoardHeader from './components/BoardHeader'
import Avatar from './images/Avatar.png'
import NewPost from './components/NewPost'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <BoardHeader />
      <NewPost />
    </>
  )
}

export default App
