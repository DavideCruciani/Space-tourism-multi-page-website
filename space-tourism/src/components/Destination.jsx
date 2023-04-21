import React, { useState } from 'react';
import Moon from '../assets/destination/image-moon.webp';
import data from '../data.json'

const Destination = () => {

  const [index, setIndex] = useState(0)

  return (
    <main className='min-h-[100vh] w-full absolute top-0 left-0 bg-center bg-cover bg-[url("/src/assets/destination/background-destination-mobile.jpg")] sm:bg-[url("/src/assets/destination/background-destination-tablet.jpg")] lg:bg-[url("/src/assets/destination/background-destination-desktop.jpg")] pt-32 sm:pt-44 lg:pt-64 pb-6'>
      <div className='pb-24 sm:pl-8 lg:max-w-[1240px] mx-auto text-center sm:text-left'>
        <h1 className='uppercase font-BarlowCD text-xl sm:text-3xl text-white tracking-widest'><span className='pr-6 text-[#ffffff3f] font-bold'>01</span>Pick your destination</h1>
      </div>
      <div className='lg:max-w-[1240px] w-full text-center lg:text-left mx-auto flex flex-col items-center lg:items-start lg:flex-row px-8'>
        
        <div className='lg:w-1/2 mb-20 lg:mb-0'>
          
          <div>
            <img className='w-[18rem] lg:w-[30rem]' src={data.destinations[index].images.webp} alt="/" />
          </div>
        </div>

        <div className='w-1/2 lg:pl-24 min-w-[300px] sm:min-w-[450px]'>
          <div className='flex justify-center lg:justify-start'>
            <ul className='flex gap-8 font-BarlowCD text-[#D0D6F9] text-xl tracking-widest h-12'>
              <li className={ index == 0 ? "border-b-4 border-white cursor-pointer" : "cursor-pointer"} onClick={() => {setIndex(0)}}>MOON</li>
              <li className={ index == 1 ? "border-b-4 border-white cursor-pointer" : "cursor-pointer"} onClick={() => {setIndex(1)}}>MARS</li>
              <li className={ index == 2 ? "border-b-4 border-white cursor-pointer" : "cursor-pointer"} onClick={() => {setIndex(2)}}>EUROPA</li>
              <li className={ index == 3 ? "border-b-4 border-white cursor-pointer" : "cursor-pointer"} onClick={() => {setIndex(3)}}>TITAN</li>
            </ul>
          </div>
          <div className='mb-6 sm:mb-0'>
            <h1 className='text-6xl sm:text-8xl uppercase font-Bellefair text-white py-6'>{data.destinations[index].name}</h1>
            <p className='text-[#D0D6F9] text-lg sm:text-xl font-Barlow leading-9 sm:min-h-[180px] min-h-[220px]'>{data.destinations[index].description}</p>
          </div>

          <hr className='mb-8 h-px border-white border-opacity-25' />

          <div className='flex'>
            <div className='flex flex-col w-1/2'>
              <h4 className='text-[#D0D6F9] font-BarlowCD text-lg mb-1'>AVG. DISTANCE</h4>
              <h3 className='text-white text-xl sm:text-3xl font-Bellefair uppercase'>{data.destinations[index].distance}</h3>
            </div>
            <div className='flex flex-col w-1/2'>
              <h4 className='text-[#D0D6F9] font-BarlowCD text-lg mb-1'>EST. TRAVEL TIME</h4>
              <h3 className='text-white text-xl sm:text-3xl font-Bellefair uppercase'>{data.destinations[index].travel}</h3>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Destination