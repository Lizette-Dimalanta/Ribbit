import { useState } from 'react'
import './index.css'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <div>
        <img src="src/images/cover-photo.jpeg" alt="" className="bg-cover" />
    </div>
    <div className="bg-reddit_dark-brighter">
      <div className="mx-4">
        <div className="h-20 w-20 overflow-hidden">
          <img src="src/images/frog-icon.jpeg" alt="" className="rounded-full" />
        </div>
      </div>
    </div>
    </>
  )
}

export default App
