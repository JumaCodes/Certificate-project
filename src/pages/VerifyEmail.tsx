import React, { useState } from 'react'
import VerifyEmailLayout from '../layouts/VerifyEmailLayout'
import Back from "../assets/icons/Back.jpg"
import { Link } from 'react-router-dom'

const VerifyEmail = () => {
  const [verify, setVerify] = useState({
    fistNumber: "",
    secondNumber: "",
    thirdNumber: "",
    fouthNumber: "",
  })

  const userHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setVerify((perState) => ({ ...perState, [name]: value }));
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { fistNumber, secondNumber, thirdNumber, fouthNumber } = verify;
    if (!fistNumber && !secondNumber && !thirdNumber && !fouthNumber) {
      // return toast.error("Password does not match");
      return;
    }
    // signUp(email, password, firstName, lastName);
    // navigate("/feed");
  }


  return (
    <VerifyEmailLayout>
      <div className="w-full h-96 bg-white pt-4 pb-20 px-4">

        <Link to="/register" className=" justify-start items-center gap-1 flex group">
          <img src={Back} className="w-5 h-5" alt='GoBack' />
          <div className="text-stone-600 text-sm font-semibold font-['DM Sans'] leading-tight">Back</div>
        </Link>
        <div className="py-40 px-28">
          <div className="flex flex-col justify-center items-center gap-12">
            <div className="flex-col justify-center items-center gap-12 flex">
              <div className="flex-col justify-center items-center gap-3 flex">
                <div className="text-neutral-900 text-3xl font-medium font-['DM Sans'] leading-10">Enter confirmation code</div>
                <div className="text-zinc-600 text-base font-normal font-['DM Sans'] leading-normal">We emailed you a code. Please input the code here for account verification</div>
              </div>
              <form onSubmit={submitHandler} className="justify-center items-center gap-6 inline-flex">
                <input type='text' name='firstNumber' className="w-28 h-20 text-center text-5xl pl-4 pr-3 py-2.5 bg-white rounded-lg shadow border border-gray-300" onChange={userHandler} />
                <input type="text" name="secondNumber" className="w-28 h-20 text-center text-5xl pl-4 pr-3 py-2.5 bg-white rounded-lg shadow border border-gray-300" onChange={userHandler} />
                <input type="text" name="thirdNumber" className="w-28 h-20 text-center text-5xl pl-4 pr-3 py-2.5 bg-white rounded-lg shadow border border-gray-300" onChange={userHandler} />
                <input type="text" name="fouthNumber" className="w-28 h-20 text-center text-5xl pl-4 pr-3 py-2.5 bg-white rounded-lg shadow border border-gray-300" onChange={userHandler} />
              </form>
            </div>


            <button type='submit' className="w-96 h-14 px-4 py-2 bg-indigo-600 rounded-lg justify-center items-center gap-2 inline-flex shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              <span className="text-white text-lg font-bold font-['DM Sans'] leading-relaxed">Create account</span>
            </button>
          </div>
        </div>
      </div>
    </VerifyEmailLayout>
  )
}

export default VerifyEmail