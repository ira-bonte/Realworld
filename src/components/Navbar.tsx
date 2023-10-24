import React from 'react'
import logo1 from '../assets/img/png/logo-no-background.png';
import {BsFacebook,BsInstagram,BsSearch, BsLinkedin} from 'react-icons/bs';
const Navbar = () => {
  return (

    <nav className='flex gap-48 bg-gray-50 text-black h-24 w-full fixed z-10 p-2'>
      <a href=''>
          <img src={logo1} alt="" className='h-20 w-56 '/>
          </a>
          <div className=''></div>
         

        <ul className='flex gap-16 p-3 text-black text-xl '>

          <li><a href='#'>Blog</a></li>
          <li><a href='#'>Categories</a></li>
          <li><a href='#'>Contact</a></li>
          
          </ul>
          {/* media */}
        <div className='flex gap-8 p-3 text-2xl '>
          <a href='https://www.facebook.com'target='blank'><BsFacebook/></a>
          <a href='https://www.linkedin.com' target='blank'><BsLinkedin/></a>
          <a href='https://www.instagram.com' target='blank'><BsInstagram/></a>
          <a href=''><BsSearch/></a>
        </div>
    </nav>
  )
}

export default Navbar;
