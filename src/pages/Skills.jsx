import React from 'react'
import Skillprogressbar from '../components/Skillprogressbar';

const Skills = () => {
  
  return (
    <section className="w-full lg:h-full lg:px-11 md:px-8 py-10 md:py-0">
      <div className="flex flex-col h-full md:h-full md:py-12 justify-center items-start">
      <h2 className="text-4xl mb-6 flex items-center uppercase font-bold text-gray-700">
           
           <p className="border-b-[2px] mr-2 border-b-[#6c5ce7]">my</p>
           <p className="text-[#6c5ce7]">Skills</p>
         </h2>
         <h3 className="flex gap-2 items-center mb-2">
          <i className="fa-solid fa-award text-md text-gray-500"></i>
          
          <span className="text-md text-gray-700 font-medium">
          PERSONAL SKILL
          </span>
        </h3>
        <p className="text-gray-600">
        We love what we do and we do what our clients love & work with great clients all over the world to create thoughtful and purposeful websites. Website without visitors is like a ship lost in the horizon. We love what we do and we do what our clients love & work with great clients all over the world to create thoughtful.
        </p>





        <div className="grid lg:grid-cols-2 w-full grid-cols-1 lg:gap-5 mt-8">
          <div className="flex flex-col">
            
            <Skillprogressbar done='99' text='HTML' />
            <Skillprogressbar done='85' text='JAVASCRIPT' />
            <Skillprogressbar done='95' text='React js' />
            <Skillprogressbar done='88' text='Next js' />
          
          </div>



          <div className="flex flex-col">
          <Skillprogressbar done='98' text='CSS' />
          <Skillprogressbar done='92' text='BOOTSTRAP' />
          <Skillprogressbar done='95' text='Tailwind css' />
          <Skillprogressbar done='90' text='material ui' />
          </div>
        </div>






        <div className="sm:gap-3 flex flex-col justify-start items-start lg:mb-0 mt-4">
        <h3 className="flex gap-2 items-center">
          
          <i className="fa-solid fa-message text-sm text-gray-500"></i>
          <span className="text-md text-gray-700 font-medium">
          COMMUNICATION SKILL
          </span>
        </h3>
        <p className="text-gray-600">
        We love what we do and we do what our clients love & work with great clients all over the world to create thoughtful and purposeful websites. Website without visitors is like a ship lost in the horizon. We love what we do and we do what our clients love & work with great clients all over the world to create thoughtful.
        </p>

        <div className='flex lg:justify-start items-center justify-between flex-wrap gap-10 xl:gap-24 lg:mt-4 mt-6 w-full'>
          <div className='flex flex-col justify-center items-center gap-3'>
            <h3 className='text-md font-medium uppercase text-gray-700'>bangla</h3>
            <div className='flex gap-2'>
            <i className="fa-solid fa-star text-[#6c5ce7]"></i>
            <i className="fa-solid fa-star text-[#6c5ce7]"></i>
            <i className="fa-solid fa-star text-[#6c5ce7]"></i>
            <i className="fa-solid fa-star text-[#6c5ce7]"></i>
            <i className="fa-solid fa-star text-[#6c5ce7]"></i>
            </div>
          </div>
          <div className='flex flex-col justify-center items-center gap-3'>
            <h3 className='text-md font-medium uppercase text-gray-700'>English</h3>
            <div className='flex gap-2'>
            <i className="fa-solid fa-star text-[#6c5ce7]"></i>
            <i className="fa-solid fa-star text-[#6c5ce7]"></i>
            <i className="fa-solid fa-star text-[#6c5ce7]"></i>
            <i className="fa-solid fa-star text-[#6c5ce7]"></i>
            <i className="fa-solid fa-star-half-stroke text-[#6c5ce7]"></i>
            </div>
          </div>
          
          <div className='flex flex-col justify-center items-center gap-3'>
            <h3 className='text-md font-medium uppercase text-gray-700'>hindi</h3>
            <div className='flex gap-2'>
            <i className="fa-solid fa-star text-[#6c5ce7]"></i>
            <i className="fa-solid fa-star text-[#6c5ce7]"></i>
            <i className="fa-solid fa-star text-[#6c5ce7]"></i>
            <i className="fa-solid fa-star text-[#6c5ce7]"></i>
            <i className="fa-solid fa-star-half-stroke text-[#6c5ce7]"></i>
            </div>
          </div>
        
          <div className='flex flex-col justify-center items-center gap-3'>
            <h3 className='text-md font-medium uppercase text-gray-700'>urdu</h3>
            <div className='flex gap-2'>
            <i className="fa-solid fa-star text-[#6c5ce7]"></i>
            <i className="fa-solid fa-star text-[#6c5ce7]"></i>
            <i className="fa-solid fa-star text-[#6c5ce7]"></i>
            <i className="fa-solid fa-star text-[#6c5ce7]"></i>
            <i className="fa-solid fa-star-half-stroke text-[#6c5ce7]"></i>
            </div>
          </div>
        </div>
     
 </div> 
      </div>
    </section>
  )
}

export default Skills
