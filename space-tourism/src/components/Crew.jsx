import React, { useState } from 'react'
import data from '../data.json'

const Crew = () => {

  const [indexCrew, setIndexCrew] = useState(0)

  return (
    <main className='min-h-[100vh] w-full relative bg-center bg-cover bg-[url("/src/assets/crew/background-crew-mobile.jpg")] sm:bg-[url("/src/assets/crew/background-crew-tablet.jpg")] lg:bg-[url("/src/assets/crew/background-crew-desktop.jpg")] pt-32 sm:pt-44 lg:pt-64 pb-6'>
      <div className='mb-12 lg:mb-32 sm:pl-8 lg:max-w-[1240px] mx-auto text-center sm:text-left'>
        <h1 className='uppercase font-BarlowCD text-xl sm:text-2xl lg:text-3xl text-white tracking-widest'><span className='pr-6 text-[#ffffff3f] font-bold'>02</span>Meet your crew</h1>
      </div>

      <img className='max-h-[300px] mx-auto sm:hidden' src={data.crew[indexCrew].images.webp} alt="Crew Member" />

      <div className='lg:max-w-[1240px] w-full text-center lg:text-left mx-auto flex flex-col items-center lg:items-start lg:flex-row px-8'>
        <div className='flex flex-col-reverse sm:flex-col'>
          <div>
            <h2 className='text-base sm:text-xl lg:text-2xl text-[#FFFFFF80] font-Bellefair uppercase'>{data.crew[indexCrew].role}</h2>
            <h1 className='mt-4 text-4xl sm:text-5xl lg:text-6xl text-white font-Bellefair uppercase'>{data.crew[indexCrew].name}</h1>
            <p className='text-[#D0D6F9] mx-auto lg:mx-0 text-base sm:text-lg font-Barlow mt-6 max-w-lg lg:max-w-md h-[150px]'>{data.crew[indexCrew].bio}</p>
          </div>
          
          <div className='w-28 lg:w-32 mx-auto lg:mx-0 my-6 sm:my-0 lg:mt-20 flex items-center justify-between'>
            <button className={indexCrew == 0 ? 'w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-white' : 'w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-white opacity-25'} onClick={() => {setIndexCrew(0)}}></button>
            <button className={indexCrew == 1 ? 'w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-white' : 'w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-white opacity-25'} onClick={() => {setIndexCrew(1)}}></button>
            <button className={indexCrew == 2 ? 'w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-white' : 'w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-white opacity-25'} onClick={() => {setIndexCrew(2)}}></button>
            <button className={indexCrew == 3 ? 'w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-white' : 'w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-white opacity-25'} onClick={() => {setIndexCrew(3)}}></button>
          </div>
        </div>
        <div>
        </div>
      </div>

      <img className='absolute hidden sm:block lg:left-[55%] left-1/2 -translate-x-1/2 lg:-translate-x-0 max-h-[340px] lg:max-h-none bottom-0' src={data.crew[indexCrew].images.webp} alt="Crew member" />
    </main>
  )
}

export default Crew