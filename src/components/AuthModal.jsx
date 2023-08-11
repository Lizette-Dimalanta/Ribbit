import React from 'react'
import Input from './Input'
import Button from './Button'

const AuthModal = () => {
  return (
    <div className="w-screen h-screen fixed top-0 left-0 z-20 flex" style={{backgroundColor:'rgba(0,0,0,.6)'}}>
      <div className="w-1/2 border border-reddit_dark-brightest bg-reddit_dark p-5 text-reddit_text self-center mx-auto rounded-md">
        <h1 className="text-2xl mb-3">
          Login
        </h1>
        <Input type="text" className="mb-2" />
        <Input type="password" className="mb-2" />
        <Button className="w-full">
          Log In
        </Button>
      </div>
    </div>
  )
}

export default AuthModal