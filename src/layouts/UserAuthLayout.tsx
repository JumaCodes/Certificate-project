import React, { ReactNode, useEffect, useState } from 'react'
import ResgiterImg from "../assets/Register.png"
import { Link, Navigate, useNavigate } from 'react-router-dom';


interface UserAuthLayoutProps {
  children: ReactNode;
}

const UserAuthLayout: React.FC<UserAuthLayoutProps> = ({ children }) => {
  const [authUrl, setAuthUrl] = useState(false)
  const navigate = useNavigate()


  const LoginChange = () => {
    setAuthUrl(true);
    navigate("/login")
  }

  const ResisterChange = () => {
    setAuthUrl(false);
    navigate("/register");
  }

  // const change = () => {
  //   if (authUrl === false) {
  //     setAuthUrl(true)
  //   } else {
  //     setAuthUrl(false)
  //   }
  // }

  // useEffect(() => {
  //   change()
  // }, [])


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
        <div className="w-full flex-1 mx-auto flex justify-center">
          <div className="p-8 flex flex-col">
            <div className="flex-col justify-start items-start gap-6 flex">
              <div className="flex-col justify-start items-start gap-3 flex">
                <div className="w-full justify-start items-start gap-72 inline-flex">

                  <span onClick={ResisterChange} className="text-neutral-900 text-base font-bold font-['DM Sans'] leading-normal cursor-pointer">REGISTER</span>

                  <span onClick={LoginChange} className="text-neutral-900 text-base font-bold font-['DM Sans'] leading-normal cursor-pointer">LOG IN</span>



                </div>
                <div className="w-full mx-auto h-1.5 relative">
                  <div className="w-60 h-1.5 left-0 top-0 absolute bg-zinc-300" />
                  <div className="w-60 h-1.5 right-0  top-0 absolute bg-zinc-300" />
                  {authUrl === false && <div className="w-56 h-1.5  top-0 absolute left-0 transition-all duration-300 bg-indigo-600" />
                  }

                  {authUrl === true && <div className="w-56 h-1.5  top-0 absolute right-0 transition-all duration-300 bg-indigo-600" />
                  }
                </div>
              </div>

              {authUrl === false &&
                <div className="text-neutral-900 text-3xl font-medium font-['DM Sans'] leading-10 pl-10">Register as a Writer/Reader</div>
              }

              {authUrl === true &&
                <div className="text-black text-3xl font-medium font-['DM Sans'] text-center pl-24 leading-10 mt-10">Welcome back</div>
              }
            </div>


            <div className="mt-10">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default UserAuthLayout