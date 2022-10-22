import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
    const navigate=useNavigate();
  return (
    <div className='flex flex-col justify-center items-center fixed top-0 left-0 w-full h-screen bg-gray-200'>
      <h1 className='text-8xl font-bold'>404</h1>
      <p className='text-2xl font-medium'>Ops! Page not found.</p>
      <button onClick={()=>navigate('/')} className='px-4 mt-3 py-2 bg-slate-400 hover:bg-slate-500'>Back to home</button>
    </div>
  )
}

export default Error
