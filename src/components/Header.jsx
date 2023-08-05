import React from 'react'
import Logo from '../images/reddit-logo.png'
import { BsSearch, BsChatDots, BsBell, BsChevronDown } from 'react-icons/bs'
import { AiOutlinePlus } from "react-icons/ai"
import Avatar from '../images/Avatar.png'
import Button from './Button'

const Header = () => {
  return (
    <header className="w-full bg-reddit_dark p-2">
        <div className="mx-4 flex">
            <img src={Logo} alt="" className="w-[33px] h-[33px] mr-4 flex self-center"/>
            <form action="" className="bg-reddit_dark-brighter p-1 flex rounded-full border-[1px] border-reddit_border mx-4 flex-grow">
                <BsSearch className="text-gray-500 h-5 w-5 pl-1 flex self-center"/>
                <input type="text" className="bg-reddit_dark-brighter h-6 text-sm pl-3 text-white focus:outline-none flex self-center" placeholder="Search"/>
            </form>
            {/* <button className="px-2 py-1">
                <BsChatDots className="text-gray-400 w-6 h-6 mx-2" />
            </button>
            <button className="px-2 py-1">
                <BsBell className="text-gray-400 w-6 h-6 mx-2"/>
            </button>
            <button className="px-2 py-1">
                <AiOutlinePlus className="text-gray-400 w-8 h-8 mx-1" />
            </button> */}

            <div className="mx-2">
                <Button outline={true} className="mr-1">Log In</Button>
                <Button outline={false} className="">Sign Up</Button>
            </div>
        
            <button className="rounded-md flex self-center ml-5">
                <div className="w-8 h-8">
                    <img src={Avatar} alt="" className="w-8 h-8 block rounded-md" />
                </div>
                <BsChevronDown className="text-gray-400 w-4 h-4 mt-2 ml-2"/>
            </button>
        </div>
    </header>
  )
}

export default Header