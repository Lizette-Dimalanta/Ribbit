import { React, useState } from 'react'
import Input from './Input'
import Button from './Button'
// import axios from 'axios'

const AuthModal = () => {
  const [modalType, setModalType] = useState("login")
  const [email, setEmail ] = useState("")
  const [username, setUsername ] = useState("")
  const [password, setPassword ] = useState("")

  function register(){
    e.preventDefault()
    axios.post()
  }

  return (
    <div className="w-screen h-screen fixed top-0 left-0 z-20 flex" style={{backgroundColor:'rgba(0,0,0,.6)'}}>
      <div className="w-3/4 sm:w-1/2 md:w-1/4 border border-reddit_dark-brightest bg-reddit_dark p-5 text-reddit_text self-center mx-auto rounded-md">
        {modalType === "login" && (
          <h1 className="text-2xl mb-5">
            Login
          </h1>
        )}
        {modalType === "register" && (
          <h1 className="text-2xl mb-5">
            Register
          </h1>
        )}
        {modalType === "register" && (
          <div className="mb-3">
          <label>
            <span className="text-reddit_text-darker text-xs">
              EMAIL
            </span>
            <Input type="email" className="mb-3 w-full" value={email} onChange={e => setEmail(e.target.value)} />
          </label>
        </div>
        )}
        <div className="mb-3">
          <label>
            <span className="text-reddit_text-darker text-xs">
              USERNAME
            </span>
            <Input type="text" className="mb-3 w-full" value={username} onChange={e => setUsername(e.target.value)} />
          </label>
        </div>
        <div className="mb-3">
          <label>
            <span className="text-reddit_text-darker text-xs">
              PASSWORD
            </span>
            <Input type="password" className="mb-3 w-full" value={password} onChange={e => setPassword(e.target.value)} />
          </label>
        </div>
        {modalType === "login" && (
          <Button className="w-full py-2 mb-3" style={{borderRadius:'.3rem'}}>
            Log In
          </Button>
        )}
        {modalType === "register" && (
          <Button className="w-full py-2 mb-3" style={{borderRadius:'.3rem'}} onClick={e => register(e)}>
            Sign Up
          </Button>
        )}
        {modalType === "login" && (
          <div>
            New to Ribbit? 
            <button onClick={() => setModalType("register")} className="text-green-600 font-bold pl-2">
              SIGN UP
            </button>
            
          </div>  
        )}
        {modalType === "register" && (
          <div>
            Already have an account?  
            <button onClick={() => setModalType("login")} className="text-green-600 font-bold pl-2">
              LOG IN
            </button>
          </div>  
        )}
      </div>
    </div>
  )
}

export default AuthModal