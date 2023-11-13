import React from 'react'
import HeroBg from "../assets/Hero-bg.png"
import { Link } from 'react-router-dom'

const Hero = () => {
  return (


    <div className="w-full relative">
      <img src={HeroBg} alt="Hero Background" className="w-full h-[765px] z-0" />
      <div className="w-full h-[765px] z-30 bg-black bg-opacity-60 absolute top-0 left-0"></div>

      <div className="flex-col justify-center items-start gap-9 inline-flex absolute top-[32%] left-[15%] z-50 max-w-[1200px]">
        <div className="flex-col justify-start items-start gap-6 flex">
          <div className="w-full text-white text-5xl font-bold font-['DM Sans'] leading-[1.5]">Welcome to Chatter: A Haven for Text-Based Content</div>
          <div className="w-full text-white text-2xl font-medium font-['DM Sans'] leading-9 max-w-[900px]">Unleash the Power of Words, Connect with Like-minded Readers and Writers</div>
        </div>
        <Link to="/dashboard/feed" className="w-40 h-14 px-4 py-2 bg-indigo-600 rounded-lg justify-center items-center gap-2 inline-flex shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          <span className="text-white text-lg font-bold font-['DM Sans'] leading-relaxed">Get started</span>
        </Link>
      </div>
    </div>
  )
}

export default Hero