import { React, useState, useEffect, useRef } from 'react'
import Logo from '../images/Frog.webp'
import { BsSearch, BsChatDots, BsBell, BsChevronDown } from 'react-icons/bs'
import { AiOutlinePlus } from "react-icons/ai"
import Avatar from '../images/Avatar.png'
import Button from './Button'
import { CiUser, CiLogin } from "react-icons/ci"

const Header = () => {
  // Manages the visibility state of user dropdown
  const [userDropdownVisibilityClass, setuserDropdownVisibilityClass] = useState("hidden") // In hidden initial state
  // Handles clicks outside user dropdown to close
  function useUserDropdown(ref) {
    useEffect(() => {
        function handleClickOutside(event) {
            if(ref.current && !ref.current.contains(event.target)) {
                setuserDropdownVisibilityClass("hidden");
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
  }

  // Detect clicks outside user dropdown
  const userDropdownRef = useRef(null)
  useUserDropdown(userDropdownRef)

  // Handles visibility state of the user dropdown
  function toggleUserDropdown() {
    if (userDropdownVisibilityClass === "hidden") {
        setuserDropdownVisibilityClass("block")
    } else {
        setuserDropdownVisibilityClass("hidden")
    }
  }

  return (
    <header className="w-full bg-reddit_dark p-2">
        <div className="mx-4 flex relative">
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

            <div className="mx-2 hidden sm:block">
                <Button outline={true} className="mr-1">Log In</Button>
                <Button outline={false} className="">Sign Up</Button>
            </div>
        
            <button className="rounded-md flex self-center ml-5 border border-gray-500" onClick={() => toggleUserDropdown()} ref={userDropdownRef}>
                <CiUser className="w-6 h-6 text-gray-400 m-1" />
                {/* <div className="w-8 h-8"> */}
                    {/* <img src={Avatar} alt="" className="w-8 h-8 block rounded-md" /> */}
                {/* </div> */}
                <BsChevronDown className="text-gray-400 w-4 h-4 mt-2 mr-2"/>
            </button>
            <div className={"absolute right-0 top-8 bg-reddit_dark border border-gray-700 z-10 rounded-md text-reddit_text " + userDropdownVisibilityClass} >
                <button href="" className="w-50 py-2 px-3 text-sm flex items-center hover:bg-gray-300 hover:text-black">
                    <CiLogin className="w-5 h-5 mr-2" />
                    Log In / Sign Up
                </button>
            </div>
        </div>
    </header>
  )
}

export default Header