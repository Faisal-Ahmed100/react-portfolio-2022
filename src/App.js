import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import './index.css';
import Sidebar from './components/Sidebar'
import Skills from './pages/Skills'
import Education from './pages/Education'
import Portfolio from './pages/Portfolio'
import Error from './pages/Error'
import { useState } from 'react'
import { useEffect } from 'react';
import BounceLoader from "react-spinners/BounceLoader";

const App = () => {
  const [loading,setLoading]=useState(false);
  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
setLoading(false);
    },4000);
  },[]);
  return (
    <>
    {
      loading ? 
      <div className='flex justify-center items-center h-screen'>

         <BounceLoader
      color={'#6c5ce7'}
      loading={loading}
      size={65}
    />
      </div>
     
      :
      <div className='bg-gradient-to-r from-indigo-50 via-purple-200 to-indigo-50'>
       <BrowserRouter>
    <Sidebar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/my-skills' element={<Skills />} />
        <Route path='/education' element={<Education />} />
        <Route path='/portfolios' element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/*' element={<Error />} />
      </Routes>
      </Sidebar>
    </BrowserRouter>
    </div>
    }
    
     
    </>
   
   
  )
}

export default App
