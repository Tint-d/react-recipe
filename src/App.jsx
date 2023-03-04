import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
import Detail from './pages/Detail'
import Search from './components/Search'

const App = () => {
  return (
    <div className=' container mx-auto'>
      <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/detail/:id' element={<Detail/>}/>
      <Route path='/search/:name' element={<Search/>}/>
      <Route/>
    </Routes>
    </div>
  )
}

export default App