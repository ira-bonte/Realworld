import React from 'react'
import logo1 from '../assets/img/png/logo-no-background.png';
import {BsFacebook,BsTwitter,BsInstagram,BsSearch} from 'react-icons/bs';
const Navbar = () => {
  return (

    <nav className='flex gap-48 bg-gray-50 text-black h-24 w-full fixed z-10 p-2'>
          <img src={logo1} alt="" className='h-20 w-56 '/>
          <div className=''></div>
         

        <ul className='flex gap-16 p-3 text-black text-xl '>

          <li>Blog</li>
          <li>Single post</li>
          <li>Categories</li>
          
          </ul>
          {/* media */}
        <div className='flex gap-8 p-3 text-2xl '>
            <BsFacebook/>
          <BsTwitter/>
          <BsInstagram/>
          <BsSearch/>
        </div>
    </nav>
  )
}

export default Navbar;
