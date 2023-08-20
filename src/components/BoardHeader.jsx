import React from 'react'

const BoardHeader = () => {
  return (
    <>
        <div>
            <img src="/cover-photo.jpeg" alt="" className="bg-cover" />
        </div>
        <div className="bg-reddit_dark-brighter">
        <div className="mx-6 relative flex">
            <div className="h-20 w-20 overflow-hidden relative -top-3">
            <img src="/Frog2.png" alt="" className="rounded-full" />
            </div>
            <div className="pt-2 pl-4">
            <h1 className="text-gray-300 text-3xl">
                webdev: ribbit for web developers
            </h1>
            <h5 className="text-gray-500">
                r/webdev
            </h5>
            </div>
        </div>
        </div>
    </>
  )
}

export default BoardHeader