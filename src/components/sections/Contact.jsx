import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const Contact = () => {
  return (
    <div className='w-full lg:w-1/2 mx-auto min-h-72 flex justify-evenly flex-col border p-5 m-5 md:rounded-sm glassCard'>
      <h1 className='text-2xl md:text-4xl font-thin '>Subscribe to our Newsletter</h1>
      <p className='text-gray-700 font font-thin'> Stay Updated with the Latest in Journalism. Join our newsletter to receive exclusive updates, valuable resources, and insider insights straight to your inbox.</p>
      <div className='flex w-full max-w-sm items-center space-x-2'>
        <Input className="outline-none" type="email" placeholder="Email" />
        <Button type="submit">Subscribe</Button>
      </div>
    </div>
  )
}

export default Contact