import React from 'react'
import AutoScroll from 'embla-carousel-auto-scroll'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

const Testimonials = () => {
  // these data are to be fetched from database
  const CarouselData = [
    {
      name:"Emily",
      src:"assets/images/students/profile1.jpg",
      quote:"Aspiring Journalist",
      desc:"Mr. Arun's course was a game-changer for me. His real-world insights and practical exercises helped me develop the skills I needed to excel in journalism. I can't recommend it enough"
    },
    {
      name:"Raj",
      src:"assets/images/students/profile2.jpg",
      quote:"Journalism Student",
      desc:"Taking Mr. Arun's course was one of the best decisions I've made for my career. His passion for journalism is contagious, and his guidance helped me gain confidence in my writing and reporting abilities"
    },
    {
      name:"Sarah",
      src:"assets/images/students/profile3.jpg",
      quote:"Freelance Writer",
      desc:"As someone transitioning into journalism from a different field, Mr. Arun's course provided me with invaluable knowledge and techniques. The course content was comprehensive, and Mr. Arun's feedback was incredibly helpful"
    },
    {
      name:"Michael",
      src:"assets/images/students/profile4.jpg",
      quote:"Recent Graduate",
      desc:"Mr. Arun's course exceeded my expectations. It wasn't just about learning theory; it was about practical application. His mentorship gave me the confidence to pursue my dream job in journalism"
    },
    {
      name:"Priya",
      src:"assets/images/students/profile5.jpg",
      quote:"Media Professional",
      desc:"I've been working in media for years, but Mr. Arun's course still taught me so much. His expertise and industry insights are unmatched. I walked away from the course with a renewed passion for journalism"
    },
  ]
  return (
    <div className='w-screen min-h-screen flex_center flex-col glassCard'>
      <h1 className='text-2xl md:text-4xl font-thin my-10'>Quotes from Previous Participants</h1>
      <div className='w-5/6 lg:w-3/5 flex_center p-2 '>
      <Carousel
          opts={{
            align: "start",
            loop:true,

          }}
          plugins={[
            AutoScroll({
              speed:1,
            }),
          ]}
          className="w-full h-full"
        >
          <CarouselContent>
            {CarouselData.map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2">
                <div className="h-full p-2 w-full  rounded-sm flex_between flex-col border border-slate-300">
                  <img src={_.src} alt='' className='h-40 w-40 rounded-full p-2  cardShadow' />
                  <h2 className='text-xl my-2'>{_.name}</h2>
                  <h2 className='font font-thin mb-2'>{_.quote}</h2>
                  <p className='text-gray-500 text-center text-sm'>{_.desc}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  )
}

export default Testimonials