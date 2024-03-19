import React from 'react'
import { Mail, Phone, Facebook, Instagram, Twitter, Linkedin, Clock } from 'lucide-react'
const Footer = () => {
  return (
    <div className='w-screen min-h-fit flex_center glassCard flex-wrap'>
      <div className='w-96 md:w-56 h-fit  flex justify-around flex-col text-gray-600 p-3 lg:mx-20 '>
        <h2 className='text-xl my-5'>Mr. Arun Kumar</h2>
        <p className='flex items-center text-sm'><Phone size={16} className='mx-2' />922-XXX-62XX</p>
        <p className='flex items-center text-sm my-3'><Mail size={16} className='mx-2' />arun.journal@gmail.com</p>
        <p className='flex items-center text-xs'><Clock size={16}  className='mx-2' />Mon - Fri : 9:00 AM - 7:00 PM</p>
        <div className='flex_between w-3/5 my-5 cursor-pointer'><Facebook size={22} color='darkblue' /><Instagram size={22} color='red' /><Twitter size={22} color='skyblue'/> <Linkedin size={22} color='darkblue' /></div>
      </div>
      <div className='w-96 md:w-56 h-fit flex justify-around flex-col text-gray-600 p-3 pb-10  lg:mx-20'>
        <h2 className='text-xl my-5'>Courses</h2>
        <p className='flex items-center text-sm'>News Writing</p>
        <p className='flex items-center text-sm my-3'>Investigative Journalism</p>
        <p className='flex items-center text-xs'>Digital Media Production</p>
        <p className='flex items-center text-xs my-3'>Photo Journalism Workshop</p>
        <p className='flex items-center text-xs'>Data Journalism Workshop</p>
      </div>
      <div className='w-96 md:w-56 h-fit flex justify-around flex-col text-gray-600 p-3 pb-10  lg:mx-20'>
        <h2 className='text-xl my-5'>Quick Links</h2>
        <p className='flex items-center text-sm'>Collaborations</p>
        <p className='flex items-center text-sm my-3'>Courses</p>
        <p className='flex items-center text-xs'>About</p>
        <p className='flex items-center text-xs my-3'>Testimonials</p>
        <p className='flex items-center text-xs'>Contact</p>
      </div>
      <p className='w-screen text-sm font-thin text-center mb-10'>© 2024 Arun. All rights reserved. - Journal In Sights</p>
    </div>
  )
}

export default Footer