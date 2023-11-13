import React from 'react'
import User from "../assets/DashboardUser.png"
import Search from "../assets/icons/Search.png"
import Notification from "../assets/icons/Notification.png"

const DashboardNav = () => {
  return (
    <div className="w-full h-16 pl-56 pr-32 py-2 border-b border-stone-300 justify-end items-start gap-48 inline-flex">
      <div className="w-full self-stretch rounded-lg border border-stone-300 justify-start items-center gap-6 inline-flex">
        <div className="px-3 py-2 justify-center items-center gap-8 flex">
          <img src={Search} alt="search" />
          <input className="w-full h-full text-zinc-600 text-lg font-normal font-['DM Sans'] leading-relaxed outline-none focus:outline-none" placeholder='search chatter' />
        </div>
      </div>
      <div className="self-stretch justify-start items-center gap-3 inline-flex">
        <img src={Notification} alt="Notification Bell" className="w-6 h-6 relative cursor-pointer" />
        <div className="w-12 h-12 relative">
          <div className="w-12 h-12 left-0 top-0 absolute bg-zinc-300 rounded-full cursor-pointer">
            <img className="w-12 h-12 left-0 top-0 absolute rounded-full" src={User} alt="User" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardNav