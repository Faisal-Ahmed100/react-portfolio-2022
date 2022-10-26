import React, { useState } from 'react'

const Skillprogressbar = ({done,text}) => {
    const [style,setStyle]=useState({});
  setTimeout(()=>{
    const newStyle={
      opacity:1,
      width:`${done}%`
    }
    setStyle(newStyle)
  },200)
  return (
    <div className='mb-6'>
      <div>
            <div className='flex justify-start items-start mb-2'>
              <p className='uppercase'>{text}</p>
            </div>
           <div className='progress bg-slate-200 border border-[#6c5ce7]'>
             <div className='progress-done bg-[#6c5ce7] rounded-2xl text-white flex justify-end items-center h-full w-0 opacity-0 transition-all' style={style}>
              <span className='w-[20px] h-[20px] bg-[#6956f3] text-white p-2 texts flex justify-center items-center'>{done}</span>
             </div>
           </div>
            </div>
    </div>
  )
}

export default Skillprogressbar
