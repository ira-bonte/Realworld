import React from 'react'
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom'
import Home from './Home'
import Navbar from './Navbar'
import Footer from './footer'
import Culture from './news/Culture'
import Food from './news/Food'
import LatestGaza from './news/LatestGaza'
import MessVideoNews from './news/MessVideoNews'
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
