import React from 'react'
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom'
import Home from './Home'
import Navbar from './Navbar'
import Footer from './footer'
import Food from '../assets/news/Food'
import LatestGaza from '../assets/news/LatestGaza'
import MessVideoNews from '../assets/news/MessVideoNews'
import Culture from '../assets/news/Culture'
const NavRouters = () => {
  return (
    <Router>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/culture' element={<Culture/>}/>
            <Route path='/food' element={<Food/>}/>
            <Route path='/LatestGaza' element={<LatestGaza/>}/>
            <Route path='/messVideos' element={<MessVideoNews/>}/>
        </Routes>
        <Footer/>
    </Router>
  )
}

export default NavRouters
