import React, { useState } from 'react'
import data from '../data.json'

const Technology = () => {

  const [indexTech, setIndexTech] = useState(0)

  return (
    <main className='min-h-[100vh] w-full bg-center bg-cover bg-[url("/src/assets/technology/background-technology-mobile.jpg")] sm:bg-[url("/src/assets/technology/background-technology-tablet.jpg")] lg:bg-[url("/src/assets/technology/background-technology-desktop.jpg")] pt-32 sm:pt-44 lg:pt-64 pb-6'>

      <div className='mb-12 lg:mb-24 sm:pl-8 lg:max-w-[1240px] mx-auto text-center sm:text-left'>
        <h1 className='uppercase font-BarlowCD text-xl sm:text-2xl lg:text-3xl text-white tracking-widest'><span className='pr-6 text-[#ffffff3f] font-bold'>03</span>Space launch 101</h1>
      </div>

      <div className='lg:max-w-[1240px] w-full text-center lg:text-left mx-auto flex flex-col-reverse items-center lg:items-start lg:flex-row lg:px-8'>

        <div className='flex flex-col lg:flex-row w-full'>
          <div className='flex lg:flex-col justify-center lg:justify-start my-10 lg:my-0 gap-6 lg:mr-16'>
            <button onClick={() => {setIndexTech(0)}} className={indexTech == 0 ? 'bg-white text-black w-10 h-10 sm:w-14 sm:h-14 lg:w-20 lg:h-20 border-[1px] sm:border-2 rounded-full text-xl sm:text-2xl lg:text-3xl border-white font-Bellefair' : 'bg-transparent w-10 h-10 sm:w-14 sm:h-14 lg:w-20 lg:h-20 text-white rounded-full text-xl sm:text-2xl lg:text-3xl border-[#ffffff3f] border-[1px] sm:border-2 font-Bellefair hover:border-white'}>1</button>
            <button onClick={() => {setIndexTech(1)}} className={indexTech == 1 ? 'bg-white text-black w-10 h-10 sm:w-14 sm:h-14 lg:w-20 lg:h-20 border-[1px] sm:border-2 rounded-full text-xl sm:text-2xl lg:text-3xl border-white font-Bellefair' : 'bg-transparent w-10 h-10 sm:w-14 sm:h-14 lg:w-20 lg:h-20 text-white rounded-full text-xl sm:text-2xll lg:text-3xl border-[#ffffff3f] border-[1px] sm:border-2 font-Bellefair hover:border-white'}>2</button>
            <button onClick={() => {setIndexTech(2)}} className={indexTech == 2 ? 'bg-white text-black w-10 h-10 sm:w-14 sm:h-14 lg:w-20 lg:h-20 border-[1px] sm:border-2 rounded-full text-xl sm:text-2xl lg:text-3xl border-white font-Bellefair' : 'bg-transparent w-10 h-10 sm:w-14 sm:h-14 lg:w-20 lg:h-20 text-white rounded-full text-xl sm:text-2xl lg:text-3xl border-[#ffffff3f] border-[1px] sm:border-2 font-Bellefair hover:border-white'}>3</button>
          </div>

          <div className='flex flex-col'>
            <h3 className='text-[#D0D6F9] text-base sm:text-xl lg:text-2xl font-BarlowCD'>THE TERMINOLOGY</h3>
            <h1 className='text-white mt-4 mb-4 text-4xl sm:text-5xl lg:text-6xl font-Bellefair uppercase'>{data.technology[indexTech].name}</h1>
            <p className='font-Barlow text-base sm:text-lg text-[#D0D6F9] max-w-md mx-auto px-4 sm:px-0 lg:mx-0 lg:pr-4'>{data.technology[indexTech].description}</p>
          </div>
        </div>

        <div className='w-full lg:w-auto'>
          <img className='-mt-14 h-[500px] w-[550px] hidden lg:block' src={data.technology[indexTech].images.portrait} alt="Technology" />
          <img className='lg:ml-20 lg:-mt-14 lg:h-[500px] w-full block lg:hidden' src={data.technology[indexTech].images.landscape} alt="Technology" />
        </div>

      </div>

    </main>
  )
}

export default Technology