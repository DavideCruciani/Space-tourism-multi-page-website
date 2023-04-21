import React, { useState } from 'react'
import Logo from '../assets/shared/logo.svg'
import { NavLink } from 'react-router-dom'

const Header = () => {

  const [showNav, setShowNav] = useState(false)

  function ShowNavbar() {
    setShowNav(!showNav)
    console.log(showNav)
  }

  return (
    <header className='fixed flex h-0 sm:h-auto justify-between lg:items-center w-full top-0 z-50 lg:p-12 pl-12'>
      <div className='py-8'>

        <div className='bg-white rounded-full'>
          <img src={Logo} alt="Logo" />
        </div>
        
      </div>

      <hr className='flex-grow ml-14 -mr-7 h-px border-white border-opacity-25 z-10 hidden lg:block' />

      <button className={showNav ? 'block sm:hidden z-[9999] w-6 aspect-[1] bg-no-repeat bg-cover border-0 bg-[url(/src/assets/shared/icon-close.svg)] absolute right-8 top-8' : 'block sm:hidden z-[9999] w-6 aspect-[1] bg-no-repeat bg-cover border-0 bg-[url(/src/assets/shared/icon-hamburger.svg)] absolute right-8 top-8'} onClick={ShowNavbar}></button>

      <div className={showNav ? "bg-[hsla(0,0%,100%,.05)] w-3/5 sm:w-auto lg:pl-24 sm:px-10 h-[100vh] sm:h-24 lg:pr-44 flex justify-center shadow-[-4px_4px_16px_3px_#0b0d1766] backdrop-blur-[30px] translate-x-0 ease duration-500 sm:duration-0" : "bg-[hsla(0,0%,100%,.05)] w-3/5 sm:w-auto lg:pl-24 sm:px-10 h-[100vh] sm:h-24 lg:pr-44 flex justify-center shadow-[-4px_4px_16px_3px_#0b0d1766] backdrop-blur-[30px] translate-x-full sm:translate-x-0 ease-out sm:duration-0"}>
        <nav className='flex py-40 sm:py-0 sm:pl-0 sm:flex-row w-full lg:gap-14 h-full list-none text-md tracking-widest lg:text-lg text-white font-BarlowCD'>
          <ul className='flex flex-col sm:flex-row w-full gap-8'>
          <li className='sm:h-full mx-auto w-4/6 flex items-center relative'><NavLink className={({ isActive }) => {
            return isActive ? "border-b-4 border-white h-full flex items-center" : "border-b-2 border-transparent full flex items-center"
          }}
          to="/"
          ><span className='font-bold mr-2 block sm:hidden lg:block'>00</span>HOME
          </NavLink>
          </li>

          <li className='sm:h-full mx-auto w-4/6 flex items-center'><NavLink className={({ isActive }) => {
            return isActive ? "border-b-4 border-white h-full flex items-center" : "border-b-2 border-transparent full flex items-center"
          }} to="/destination"><span className='font-bold mr-2 block sm:hidden lg:block'>01</span>DESTINATION</NavLink></li>

          <li className='sm:h-full mx-auto w-4/6 flex items-center'><NavLink className={({ isActive }) => {
            return isActive ? "border-b-4 border-white h-full flex items-center" : "border-b-2 border-transparent full flex items-center"
          }} to="/crew"><span className='font-bold mr-2 block sm:hidden lg:block'>02</span>CREW</NavLink></li>

          <li className='sm:h-full mx-auto w-4/6 flex items-center'><NavLink className={({ isActive }) => {
            return isActive ? "border-b-4 border-white h-full flex items-center" : "border-b-2 border-transparent full flex items-center"
          }} to="/technology"><span className='font-bold mr-2 block sm:hidden lg:block'>03</span>TECHNOLOGY</NavLink></li>

          </ul>
          
        </nav>
      </div>
    </header>
  )
}

export default Header