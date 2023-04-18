import React from 'react'
import Logo from '../assets/shared/logo.svg'

const Header = () => {
  return (
    <header className='fixed flex items-center justify-between w-full top-0 z-50 left-1/2 -translate-x-1/2 p-12 pr-0'>
      <div>

        <div className='bg-white rounded-full'>
          <img src={Logo} alt="" />
        </div>
        
      </div>
      <hr className='flex-grow ml-14 -mr-7 h-px border-white border-opacity-25 z-10' />
      <div className='bg-[hsla(0,0%,100%,.05)] pl-32 h-24 pr-44 flex justify-center shadow-[-4px_4px_16px_3px_#0b0d1766] backdrop-blur-[30px]'>
        <nav className='flex gap-14 h-full list-none text-white'>
          <li className='h-full flex items-center'><a href="/">00 HOME</a></li>
          <li className='h-full flex items-center'><a href="/">01 DESTINATION</a></li>
          <li className='h-full flex items-center'><a href="/">02 CREW</a></li>
          <li className='h-full flex items-center'><a href="/">03 TECHNOLOGY</a></li>
        </nav>
      </div>
    </header>
  )
}

export default Header