import React from 'react'
// icons
import { BsHouse } from 'react-icons/bs'
import { FaHome } from 'react-icons/fa'
// images
import logo from '../assets/img/png/logo.png'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className=' p-2 flex bg-white justify-between '>
      <a href="./">
        <img src={logo} alt=" real word logo" className=' h-8' />
      </a>
      <ul className=' flex gap-2'>
       <li>
          <a href='./' className=' flex gap-2 font-bold text-2xl text-orange-950  cursor-pointer '>
            <FaHome className = "text-3xl "/>
            Home
          </a>
       </li>
       <li>
          <a href='./' className=' flex gap-2 font-bold text-2xl text-orange-950  cursor-pointer '>
            <FaHome className = "text-3xl "/>
            Home
          </a>
       </li>
       <li>
          <a href='./' className=' flex gap-2 font-bold text-2xl text-orange-950  cursor-pointer '>
            <FaHome className = "text-3xl "/>
            Home
          </a>
       </li>
       <li>
          <a href='./' className=' flex gap-2 font-bold text-2xl text-orange-950  cursor-pointer '>
            <FaHome className = "text-3xl "/>
            Home
          </a>
       </li>
      </ul>
    </nav>
  )
}

export default Navbar
