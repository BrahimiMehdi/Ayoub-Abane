import React from 'react'
import { Link } from 'react-scroll'
import {AiOutlineQuestionCircle} from "react-icons/ai"
import {TiSocialInstagram} from "react-icons/ti"
import {BsBook} from "react-icons/bs"
const Sidebar = ({openSideBar,sideBarOpen}) => {
    return (
        <aside onClick={openSideBar} className={`fixed transition-all duration-300 ease-in-out bg-main-light w-[100%] h-screen px-8 py-12 flex justify-center items-center ${sideBarOpen ? "left-0":"left-[-100%]"}`}>
            <div className="w-full h-full flex flex-col justify-between text-3xl">
            <div className="flex w-[200px] justify-start pb-2 border-b border-black items-center">
            <AiOutlineQuestionCircle className="mr-4 text-2xl" />
            <Link onClick={openSideBar} className="cursor-pointer  transition-all active:scale-95  " to="/about">About</Link>
            
            </div>
            <div className="flex w-[200px] justify-start pb-2 border-b border-black items-center">
            <TiSocialInstagram className="mr-4" />
            <Link onClick={openSideBar} className="cursor-pointer  transition-all active:scale-95 " to="/follow">Follow me</Link>

            </div>
            <div className="flex w-[200px] justify-start pb-2 border-b border-black items-center">
            <BsBook className="mr-4" />
            <Link onClick={openSideBar} className="cursor-pointer  transition-all active:scale-95 " to="/content">Content</Link>

            </div>
            </div>
            
            
        </aside>
    )
}

export default Sidebar
