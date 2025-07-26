import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';

const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const { openSignIn } = useClerk();

  return (
    <div className='fixed z-5 w-full backdrop-blur-2xl flex justify-between items-center py-3 px-4 sm:px-20 xl:px-32'>
      {/* <div className='w-32 sm:w-44 cursor-pointer' onClick={() => navigate('/')} /> Hydro <span className='text-primary'>Gen</span>
       <div/> */}
      <div className="flex flex-col items-center justify-center cursor-pointer" onClick={() => {
        console.log('Logo clicked');
        navigate('/');
      }}>
        <h2 className="text-[34px] font-bold flex gap-0">
          <span className="text-white text-shadow-md/50">Hydro</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-primary">Gen</span>
        </h2>
      </div>

      {
        user ? (
          <UserButton />
        ) : (
          <button
            onClick={() => openSignIn()}
            className='flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-10 py-2.5'>
            Get Started <ArrowRight className='w-4 h-4' />
          </button>
        )
      }


    </div>

  )
}

export default Navbar