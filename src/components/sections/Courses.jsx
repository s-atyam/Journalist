import React from 'react'
import {Timer,Play} from 'lucide-react'
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import {Button} from "@/components/ui/button"

const Courses = () => {
  const CarouselData = [
    {
      src:"assets/images/NewsWriting.jpg",
      title:"News Writing",
      duration: "2 Weeks",
      desc:"Learn the fundamental of journalism with our wrting course covering evrything from research and fact-checking to crafting complelling headlines and articles"
    },
    {
      src:"assets/images/InvestigativeJournalism.jpg",
      title:"Investigative Journalism",
      duration: "2 Weeks",
      desc:"Explore the exiting world of investigative journalism, where you will learn how to uncover the truth and expose courruption through in-depth research"
    },
    {
      src:"assets/images/DigitalMediaProduction.jpg",
      title:"Digital Media Production",
      duration: "2 Weeks",
      desc:"Discover the power of digital media production, where you will learn how to create enagaging content through video, audio and other digital formats that captivate and inform your audience"
    },
    {
      src:"assets/images/PhotJournalism.jpg",
      title:"Photo Journalism Workshop",
      duration: "2 Weeks",
      desc:"Offer a course on visual storytelling through photography, covering techniques, ethics, and the role of photojournalism in media"
    },
    {
      src:"assets/images/DataJournalism.jpg",
      title:"Data Journalism Workshop",
      duration: "2 Weeks",
      desc:"Teach skills for analyzing and visualizing data to tell compelling stories, covering tools and techniques for data-driven journalism"
    },
  ]
  return (
    <div className='w-screen min-h-screen flex_center flex-col glassCard'>
      <h1 className='text-4xl font-thin my-5'>Courses</h1>
      <p className='w-3/4 text-center text-sm text-gray-700 my-5'>Whether you're looking to kickstart your career in journalism, enhance your existing skills, or simply explore your passion for storytelling, our courses offer the perfect opportunity to take your first step towards achieving your goals. Join us as we embark on a journey of discovery, learning, and innovation in the exciting world of journalism.</p>
      <div className='w-3/4 h-fit flex_center'>
        <Carousel
          opts={{
            align: "start",
            loop:"true"
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="w-11/12 md:w-4/5"
        >
          <CarouselContent>
            {CarouselData.map((_, index) => (
              <CarouselItem key={index} className="basis-1/1 lg:basis-1/2 2xl:basis-1/3 p-2">
                <div className="p-1 h-96 w-64 md:w-72 rounded-sm cardShadow flex_between flex-col">
                  <div className='w-full h-fit'>
                    <img src={_.src} alt="" className='rounded-sm' />
                  </div>
                  <h1 className='text-xl font-light my-2 px-3'>{_.title}</h1>
                  <p className='text-xs font-thin text-gray-500 px-2'>{_?.desc}</p>
                  <div className='w-full h-fit flex_between'>
                    <h3 className='flex_between text-xs text-slate-500 w-16'><Timer size={15} strokeWidth={1.5} color='green' />{_.duration}</h3>
                    <Button variant="outline" className="text-green-700 animate-pulse" ><Play size={12} strokeWidth={2} className=' mx-2' color='green' />Start</Button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

      </div>
    </div>
  )
}

export default Courses