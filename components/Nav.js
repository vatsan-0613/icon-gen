"use client"

import React, { useState } from 'react'
import { useContext } from 'react'
import Image from 'next/image'
import { Judson } from 'next/font/google'
import Link from 'next/link'
import { useAppContext } from './AppContext';

const judson = Judson({subsets: ['latin'], weight : '400'})

const Nav = () => {
  
  const { activeMenu, setActiveMenu } = useAppContext();

  const handleMenuClick = (menu) =>{
    setActiveMenu(menu);
  }
  return (
    <nav className='w-[105%] h-[91px] translate-x-[-2.5%] shadow-[0_-10px_10px_0px_rgba(29,161,242,0.3)_inset]'> 
        <div className='px-[10%] flex items-center h-full justify-between'>
            <div className='flex items-center'>
            <Image
      src="/assets/logo.svg"
      width={40}
      height={40}
      alt="Picture of the author"
    />
                <p className={`${judson.className} text-[24.35px]`}>Icongen</p>
            </div>
            <div className='justify-between gap-16 items-center lg:flex hidden'>
                <Link href={"/"}  onClick={() => handleMenuClick('home')} className={`px-4 py-1 rounded-full ${activeMenu=="home" ? 'border-2' : ''}`} style={{ borderColor: 'rgba(254, 219, 138, 0.61)' }}><p className={`${activeMenu === "home" && 'gradient-text font-semibold'} font-normal`}>Home</p></Link>
                <Link href={"/generate"}  onClick={() => handleMenuClick('generate')} className={`px-4 py-1 rounded-full ${activeMenu=="generate" ? 'border-2' : ''}`} style={{ borderColor: 'rgba(254, 219, 138, 0.61)' }}><p className={`${activeMenu === "generate" && 'gradient-text font-semibold'} font-normal`}>Generate</p></Link>
                <Link href={"/pricing"} onClick={() => handleMenuClick('pricing')} className={`px-4 py-1 rounded-full ${activeMenu=="pricing" ? 'border-2' : ''}`} style={{ borderColor: 'rgba(254, 219, 138, 0.61)' }}><p className={`${activeMenu === "pricing" && 'gradient-text font-semibold'} font-normal`}>Pricing</p></Link>
                <Link href={"/my-space"} onClick={() => handleMenuClick('my-space')} className={`px-4 py-1 rounded-full ${activeMenu=="my-space" ? 'border-2' : ''}`} style={{ borderColor: 'rgba(254, 219, 138, 0.61)' }}><p className={`${activeMenu === "my-space" && 'gradient-text font-semibold'} font-normal`}>My Space</p></Link>
            </div>
            <div className='gap-6 items-center lg:flex hidden'>
                <Link href={"/"} className='relative button px-4 py-1 rounded-full shadow-[0_0_0_1px_rgba(255,255,255,0.1)]'><p>Sign in</p></Link>
                <p>Sign up</p>
            </div>
            <div className='lg:hidden flex'>
            <Image
      src="/assets/nav-menu.svg"
      width={40}
      height={40}
      alt="Picture of the author"
    />
            </div>
        </div>
    </nav>
  )
}

export default Nav