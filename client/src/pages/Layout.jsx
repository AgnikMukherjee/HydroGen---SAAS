import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import { Menu, X } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import { SignIn, useUser } from '@clerk/clerk-react';

const Layout = () => {
  const navigate = useNavigate();
  const [sidebar, setSidebar] = useState(false);

  const { user } = useUser();

  return user ? (
    <div className='flex flex-col items-start justify-start h-screen'>
      <nav className='w-full px-8 min-h-14 flex items-center justify-between border-b border-gray-200'>
        {/* <img className='cursor-pointer w-32 sm:w-44' src={assets.logo} alt="" onClick={() => navigate('/')} /> */}
        <div className="flex flex-col items-center justify-center cursor-pointer" onClick={() => {
        console.log('Logo clicked');
        navigate('/');
      }}>
        <h2 className="text-[34px] font-bold flex gap-0">
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-black/80 to-black/30">Hydro</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-primary">Gen</span>
        </h2>
      </div>
        {
          sidebar ?
            <X onClick={() => setSidebar(false)} className='w-6 h-6 text-gray-600 sm:hidden' />
            :
            <Menu onClick={() => setSidebar(true)} className='w-6 h-6 text-gray-600 sm:hidden'></Menu>

        }
      </nav>

      <div className='flex-1 w-full flex h-[clac(100vh-64px)]'>
        <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
        <div className='flex-1 bg-[#F4F7FB]'>
          <Outlet />
        </div>
      </div>

    </div>

  ) : (
    <div className='flex items-center justify-center h-screen'>
      <SignIn />
    </div>
  )
}

export default Layout