import React from 'react'

const About = () => {
  const AboutData = [
    {
      icon:"assets/icons/guide.svg",
      title:"Expert Guidance",
      desc:"Our courses are led by industry experts and seasoned journalists who bring years of practical experience and knowledge to the table"
    },
    {
      icon:"assets/icons/practical.png",
      title:"Practical Learning",
      desc:"We believe in learning by doing. That's why our courses emphasize hands-on experience through practical exercises, real-world case studies, and immersive projects"
    },
    {
      icon:"assets/icons/network.png",
      title:"Networking Opportunities",
      desc:"In journalism, connections matter. Our courses provide valuable networking opportunities, allowing you to connect with fellow learners, industry professionals, and mentors"
    },
    {
      icon:"assets/icons/career.svg",
      title:"Career Development",
      desc:"Our ultimate goal is to help you succeed in your journalism career. That's why our courses are designed to equip you with the skills, knowledge, and confidence needed to thrive in today's media landscape"
    },
  ]
  return (
    <div className='w-screen min-h-fit flex_around flex-col mb-10'>
        <h1 className='text-4xl font-thin my-10'>Why Choose Us</h1>
        <div className='w-11/12 lg:w-2/3 h-fit flex_center flex-wrap '>
          {AboutData.map((_,index)=>(
            <div key={index} className='md:w-2/3  lg:w-[48%] min-w-80 md:min-w-96 h-52 m-2 p-1 bg-slate-50 rounded-md cardShadow hover:shadow-none'>
              <div className='flex h-1/3 w-full my-5 mx-5'>
                <img src={_.icon} alt='' className='h-20 aspect-square rounded-md border p-1'/>
                <h1 className='h-full w-full flex_center font-light text-base md:text-2xl'>{_.title}</h1>
              </div>
              <p className='p-2 text-gray-500 text-xs md:text-sm'>{_.desc}</p>
            </div>
          ))}
        </div>
    </div>
  )
}

export default About