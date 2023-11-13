import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="w-100 h-96 relative bg-amber-100 bg-opacity-50">
      <div className="left-[80px] top-[72px] absolute text-indigo-600 text-5xl font-bold font-['DM Sans'] leading-10">CHATTER</div>
      <div className="left-[512px] top-[60px] absolute text-neutral-900 text-2xl font-medium font-['DM Sans'] leading-9">Explore</div>
      <div className="left-[843px] top-[60px] absolute text-neutral-900 text-2xl font-medium font-['DM Sans'] leading-9">Support</div>
      <div className="left-[1184px] top-[60px] absolute text-neutral-900 text-2xl font-medium font-['DM Sans'] leading-9">Official blog</div>
      <Link to="/" className="left-[512px] top-[124px] absolute text-neutral-900 text-lg font-normal font-['DM Sans'] leading-relaxed hover:text-indigo-500">community</Link>
      <Link to="/" className="left-[843px] top-[124px] absolute text-neutral-900 text-lg font-normal font-['DM Sans'] leading-relaxed hover:text-indigo-500">Support docs</Link>
      <Link to="/" className="left-[1184px] top-[124px] absolute text-neutral-900 text-lg font-normal font-['DM Sans'] leading-relaxed hover:text-indigo-500">Official blog</Link>
      <Link to="/" className="left-[1184px] top-[167px] absolute text-neutral-900 text-lg font-normal font-['DM Sans'] leading-relaxed hover:text-indigo-500">Engineering blog</Link>
      <Link to="/" className="left-[843px] top-[167px] absolute text-neutral-900 text-lg font-normal font-['DM Sans'] leading-relaxed hover:text-indigo-500">Join slack</Link>
      <Link to="/" className="left-[844px] top-[210px] absolute text-neutral-900 text-lg font-normal font-['DM Sans'] leading-relaxed hover:text-indigo-500">Contact</Link>
      <Link to="/" className="left-[512px] top-[167px] absolute text-neutral-900 text-lg font-normal font-['DM Sans'] leading-relaxed hover:text-indigo-500">Trending blogs</Link>
      <Link to="/" className="left-[512px] top-[210px] absolute text-neutral-900 text-lg font-normal font-['DM Sans'] leading-relaxed hover:text-indigo-500">Chatter for teams</Link>

      <div className="w-[70%] flex justify-center items-center absolute bottom-10 right-48 gap-1"><span className='font-bold'>Created by JumaCodes</span> Copyright &copy;2023.<span className='font-bold'>All right reserved</span></div>
    </footer>
  )
}

export default Footer