import { useState } from 'react'
import './index.css'
import Header from './components/Header'
import BoardHeader from './components/BoardHeader'
import Avatar from './images/Avatar.png'
import NewPost from './components/NewPost'
import AuthModal from './components/AuthModal'
import AuthModalContext from './components/AuthModalContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <AuthModalContext.Provider value={{ show:false }}>
      <Header />
      <AuthModal />
      <BoardHeader />
      <NewPost />

      <div className="bg-reddit_dark h-screen">
        <div className="bg-reddit_dark px-6 text-reddit_text pb-2">
          <div className="border border-reddit_border bg-reddit_dark-brighter p-2 rounded-md">
            <h5 className="text-reddit_text-darker text-xs">
              Posted by u/brainhurricane 5 hours ago
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
        <div className="bg-reddit_dark px-6 text-reddit_text">
          <div className="border border-reddit_border bg-reddit_dark-brighter p-2 rounded-md">
            <h5 className="text-reddit_text-darker text-xs">
              Posted by u/fergulicious 12 hours ago
            </h5>
            <h2 className="text-xl mt-1 mb-2">
              What is your preference: typescript or javascript?
            </h2>
            <p className="text-sm leading-6">
              Hi! I am a full stack developer and everybody seems so hyped about typescript. However, everytime I am using it.. I get a headache. So my question is:
              <br />
              What is your preference: javascript or typescript, and why?
            </p>
        </div>
        <div className="bg-reddit_dark text-reddit_text pt-2">
          <div className="border border-reddit_border bg-reddit_dark-brighter p-2 rounded-md">
            <h5 className="text-reddit_text-darker text-xs">
              Posted by u/night_tempo 1 day ago
            </h5>
            <h2 className="text-xl mt-1 mb-2">
              How do I make a bilingual website?
            </h2>
            <p className="text-sm leading-6">
              I am creating a website for a family member's business and there is an audience that is both in the US and Latin America, so it is important that the site be in both English and Spanish. Since this is the first "real" project I am doing, I would like recommendations from someone with more experience. Should I make one version of the site in Spanish and another in English or should I use a translation tool, and if so, which one would work properly?
            </p>
          </div>
        </div>
        <div className="bg-reddit_dark text-reddit_text pb-10 pt-2">
          <div className="border border-reddit_border bg-reddit_dark-brighter p-2 rounded-md">
            <h5 className="text-reddit_text-darker text-xs">
              Posted by u/SeatedWoodpile 1 day ago
            </h5>
            <h2 className="text-xl mt-1 mb-2">
              Is it good practice to use an API as a backup for failed webhook requests?
            </h2>
            <p className="text-sm leading-6">
            As title says, I have an API endpoint (/webhook) set up that on receive will create a copy of the data it received, essentially syncing both my app and the external app.
            <br />
            The external app will still retry failed webhook requests, but only for a few days. Is it good practice to run API polling (e.g every 20 mins) in tandem with a webhook system as well, or is just webhooks usually enough?
            </p>
          </div>
        </div>
       </div>
      </div>
    </AuthModalContext.Provider>
  )
}

export default App
