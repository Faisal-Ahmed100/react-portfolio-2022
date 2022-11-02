import React from 'react'

const PortfolioSingle = ({Img,Links}) => {
  return (
    <>
  <div className='w-full h-full'>
    <img className='h-full w-full transition-all object-cover rounded-md' src={Img} alt="img" />
  </div>

<div className='flex  flex-wrap gap-3 absolute -left-[5%] group-hover:left-0 w-full h-full bg-[#6c5ce7e3] invisible group-hover:visible transition-all justify-center items-center rounded-md'>
<a href={Links} target='__blank' className='uppercase text-sm font-medium text-white hover:underline'>View demo</a>
</div>


</>
  )
}

export default PortfolioSingle
