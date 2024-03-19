import React from 'react'

const Journey = () => {
  return (
    <section className='w-screen min-h-fit flex_center flex-col bg-sky-50 pb-24'>
        <h1 className='text-4xl font-thin my-16'>Our Journey</h1>
        <div className='w-5/6 md:w-3/5 flex_center my-5 flex-col lg:flex-row'>
            <div className='flex_evenly lg:w-3/5 p-2 flex-col'>
                <h1 className='font-thin text-4xl lg:text-6xl my-2'>Join Our Community of Successful Journalists</h1>
                <h1 className='text-sm text-gray-500'>Join a community of successful journalists who have advanced their careers through our online courses, consistently expressing high satisfaction and professional achievement.</h1>
            </div>
            <div className='md:w-3/4 lg:w-2/5 p-2 flex_center flex-wrap'>
                <div className='w-36 aspect-square flex_center flex-col'>
                    <h1 className='text-5xl text-sky-500'>800+</h1>
                    <h2 className='text-xs'>Satisfied Students</h2>
                </div>
                <div className='w-36 aspect-square flex_center flex-col'>
                    <h1 className='text-5xl text-sky-500'>50+</h1>
                    <h2 className='text-xs'>Expert Instrutor</h2>
                </div>
                <div className='w-36 aspect-square flex_center flex-col'>
                    <h1 className='text-5xl text-sky-500'>10+</h1>
                    <h2 className='text-xs'>Locations</h2>
                </div>
                <div className='w-36 aspect-square flex_center flex-col'>
                    <h1 className='text-5xl text-sky-500'>20+</h1>
                    <h2 className='text-xs'>Courses</h2>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Journey