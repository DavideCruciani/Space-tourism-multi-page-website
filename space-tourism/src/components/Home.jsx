import React from 'react'

const Home = () => {
  return (
    <main className='min-h-[100vh] w-full bg-center bg-cover bg-[url("/src/assets/home/background-home-mobile.jpg")] sm:bg-[url("/src/assets/home/background-home-tablet.jpg")] lg:bg-[url("/src/assets/home/background-home-desktop.jpg")] pt-32 sm:pt-44 lg:pt-64 pb-6'>
      <div className='max-w-[640px] md:max-w-[768px] lg:max-w-[1240px] px-6 mx-auto w-full items-center flex lg:flex-row flex-col lg:items-end'>
        <div className='text-white w-full lg:w-1/2'>
          <h5 className='uppercase font-BarlowCD text-center lg:text-left text-2xl sm:text-3xl text-[#D0D6F9]'>So, you want to travel to</h5>
          <h1 className='text-[5rem] sm:text-[9rem] text-center lg:text-left font-Bellefair uppercase'>Space</h1>
          <p className='text-[#D0D6F9] text-center lg:text-left font-Barlow text-lg'>Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>
        </div>
        <div className='flex w-full lg:w-1/2 h-[350px] lg:h-[394px] relative group'>
          <div className='bg-white text-4xl z-30 absolute bottom-0 left-1/2 -translate-x-1/2 lg:right-0 lg:-translate-x-0 lg:left-auto cursor-pointer uppercase font-Bellefair flex w-60 h-60 sm:w-72 sm:h-72 text-center items-center justify-center rounded-full'>Explore</div>
          <div className='w-60 h-60 sm:w-72 sm:h-72 absolute bottom-0 left-1/2 -translate-x-1/2 lg:right-0 lg:-translate-x-0 lg:left-auto rounded-full bg-[#ffffff19] transition duration-[.43s] group-hover:scale-[1.3] lg:group-hover:scale-[1.5]'></div>
        </div>
      </div>
    </main>
  )
}

export default Home