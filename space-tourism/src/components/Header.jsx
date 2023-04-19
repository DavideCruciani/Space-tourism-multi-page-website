import React from 'react'
import Logo from '../assets/shared/logo.svg'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='fixed flex items-center justify-between w-full top-0 z-50 left-1/2 -translate-x-1/2 lg:p-12 py-0 pl-12 pr-0'>
      <div>

        <div className='bg-white rounded-full'>
          <img src={Logo} alt="" />
        </div>
        
      </div>

      <hr className='flex-grow ml-14 -mr-7 h-px border-white border-opacity-25 z-10 hidden lg:block' />

      <div className='bg-[hsla(0,0%,100%,.05)] lg:pl-24 px-10 h-24 lg:pr-44 flex justify-center shadow-[-4px_4px_16px_3px_#0b0d1766] backdrop-blur-[30px]'>
        <nav className='flex gap-8 lg:gap-14 h-full list-none text-md tracking-widest lg:text-lg text-white font-BarlowCD'>

          <li className='h-full flex items-center relative'><NavLink className={({ isActive }) => {
            return isActive ? "border-b-2 border-white h-full flex items-center" : "border-b-2 border-transparent full flex items-center"
          }}
          to="/"
          ><span className='font-bold mr-2 hidden lg:block'>00</span>HOME
          </NavLink>
          </li>

          <li className='h-full flex items-center'><NavLink className={({ isActive }) => {
            return isActive ? "border-b-2 border-white h-full flex items-center" : "border-b-2 border-transparent full flex items-center"
          }} to="/destination"><span className='font-bold mr-2 hidden lg:block'>01</span>DESTINATION</NavLink></li>

          <li className='h-full flex items-center'><NavLink className={({ isActive }) => {
            return isActive ? "border-b-2 border-white h-full flex items-center" : "border-b-2 border-transparent full flex items-center"
          }} to="/crew"><span className='font-bold mr-2 hidden lg:block'>02</span>CREW</NavLink></li>

          <li className='h-full flex items-center'><NavLink className={({ isActive }) => {
            return isActive ? "border-b-2 border-white h-full flex items-center" : "border-b-2 border-transparent full flex items-center"
          }} to="/technology"><span className='font-bold mr-2 hidden lg:block'>03</span>TECHNOLOGY</NavLink></li>
        </nav>
      </div>
    </header>
  )
}

export default Header