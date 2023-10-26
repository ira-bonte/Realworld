import React from 'react'
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom'
import Home from './Home'
import Navbar from './Navbar'
import Footer from './footer'
import Culture from '../assets/news/Culture'
import Food from '../assets/news/Food'
const NavRouters = () => {
  return (
    <Router>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/culture' element={<Culture/>}/>
            <Route path='/food' element={<Food/>}/>
        </Routes>
        <Footer/>
    </Router>
  )
}

export default NavRouters
