import React from 'react'
import {Button} from "@/components/ui/button"

const Main = () => {
  return (
    <>
    <section className='w-screen min-h-fit flex_center flex-col backdrop-blur-sm '>
        <div className='w-full flex_center flex_evenly flex-col md:flex-row'>
              <img className=' w-2/3 md:w-2/5 lg:w-1/4 my-5 rounded-md cardShadow p-2 glassCard' src="assets/images/image1_0.jpg" alt="" />
              <div className='w-5/6 pl-8 md:w-1/2 flex flex-col '>
                  <h1 className='w-full md:w-3/4 lg:w-[55%] text-3xl md:text-4xl lg:text-5xl font-thin md:mt-16 mb-6 '>UNLOCK THE SECRETS OF JOURNALISM WITH <span className='text-blue-500'>MR. ARUN</span></h1>
                  <h2 className='text-xs md:text-base'>Arun - Online Journalism Lessons</h2>
                  <Button className="w-fit my-6 text-xs md:text-base">Get Started</Button>
              </div>
        </div>
        <div className='w-11/12 md:w-full lg:w-[65%] h-fit my-5 flex_center flex-wrap '>
          <div className='w-80 h-24 mx-2 glassCard flex_center flex-col glow my-3'>
            <h2 className='text-xs md:text-sm text-gray-500'>Award-Winning Investigative Journalism</h2>
              <p className='text-sm'>IRE Medal for Investigative Reporting</p>
          </div>
          <div className='w-80  h-24 mx-2 glassCard flex_center flex-col glow my-3'>
            <h2 className='text-xs md:text-sm text-gray-500'>Editorial Leadership</h2>
            <p className='text-sm'>Editor-in-Chief of The New York Times</p>
          </div>
          <div className='w-80  h-24 mx-2 glassCard flex_center flex-col glow my-3'>
            <h2 className='text-xs md:text-sm text-gray-500'>Renowned Speaker and Mentor</h2>
            <p className='text-sm'>TEDxTalks on the Future of Journalism</p>
          </div>
          <div className='w-80 glassCard h-24 mx-2 rounded-sm flex_center flex-col glow my-3'>
            <h2 className='text-xs md:text-sm text-gray-500'>Author of Best-Selling Book</h2>
            <p className='text-sm'>Uncovering Truth in the Digital Age</p>
          </div>
        </div>
    </section>
    </>
  )
}

export default Main