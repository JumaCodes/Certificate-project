import React from 'react'
import Logo from "../assets/Logo.png"
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="w-full h-24 flex items-center justify-center">
      <nav className="justify-start items-center gap-44 flex">
        <Link to="/" className="logo">
          <img src={Logo} alt="Logo" />
        </Link>
        <ul className="justify-start items-start gap-6 flex">
          <NavLink to='/' className="text-neutral-900 text-base font-bold font-['DM Sans'] leading-normal hover:underline hover:text-indigo-600">Home</NavLink>
          <NavLink to="/about-us" className="text-neutral-900 text-base font-bold font-['DM Sans'] leading-normal hover:underline hover:text-indigo-600">About us</NavLink>
          <NavLink to="/contact-us" className="text-neutral-900 text-base font-bold font-['DM Sans'] leading-normal hover:underline hover:text-indigo-600">Contact</NavLink>
          <NavLink to="/blogs" className="text-neutral-900 text-base font-bold font-['DM Sans'] leading-normal hover:underline hover:text-indigo-600">Blogs</NavLink>
        </ul>
        <div className="justify-start items-start gap-6 flex">
          <Link to="/login" className="w-40 h-14 group px-4 py-2 rounded-lg border border-indigo-600 justify-center items-center gap-2 flex shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            <span className="group-hover:text-white text-neutral-900 text-lg font-bold font-['DM Sans'] leading-relaxed">Log in</span>
          </Link>

          <Link to="/register" className="w-40 h-14 px-4 py-2 bg-indigo-600 rounded-lg justify-center items-center gap-2 flex shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            <span className="text-white text-lg font-bold font-['DM Sans'] leading-relaxed">Sign up</span>
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar