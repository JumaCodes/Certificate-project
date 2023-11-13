import React, { ReactNode } from 'react'
import ResgiterImg from "../assets/Register.png"

interface UserAuthEmail {
  children: ReactNode;
}

const VerifyEmailLayout: React.FC<UserAuthEmail> = ({ children }) => {
  return (
    <div className="w-full">
      <div className="inner flex justify-start">
        <div className=' relative text-white w-[40%]'>
          <div className="w-full h-full bg-black bg-opacity-50 absolute bottom-0 top-0 right-0" />
          <div className='w-full h-full'>
            <img src={ResgiterImg} alt="Resgister" className='object-cover object-center w-full h-full' />
          </div>
          <div className="absolute text-left top-[40%] left-8 px-2">
            <div className="text-white text-bold text-5xl font-bold font-['DM Sans'] text-center leading-10">CHATTER</div>
            <p className="w-full text-white text-xl font-medium font-['DM Sans'] leading-9 mt-10 max-w-[900px]">Unleash the Power of Words, Connect with  Like-<br /> minded Readers and Writers</p>
          </div>
        </div>




        <div className="mt-2">
          {children}
        </div>
      </div>
    </div>
  )
}

export default VerifyEmailLayout