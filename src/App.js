import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import './index.css';
import Sidebar from './components/Sidebar'
import Skills from './pages/Skills'
import Experience from './pages/Experience'
import Education from './pages/Education'
import Portfolio from './pages/Portfolio'
import Error from './pages/Error'

const App = () => {
  return (
    <BrowserRouter>
    <Sidebar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/my-skills' element={<Skills />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/education' element={<Education />} />
        <Route path='/portfolios' element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/*' element={<Error />} />
      </Routes>
      </Sidebar>
    </BrowserRouter>
  )
}

export default App
