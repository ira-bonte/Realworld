import React from 'react'
import logo1 from '../assets/img/png/logo-no-background.png';
import {BsFacebook,BsTwitter,BsInstagram,BsSearch} from 'react-icons/bs';
const Navbar = () => {
  return (
<<<<<<< HEAD
    <div className=' text-red-600'>
      Realworld
    </div>
=======
    <nav className='flex gap-48 bg-gray-50 text-black h-24 w-full fixed z-10 p-2'>
          <img src={logo1} alt="" className='h-20 w-56 '/>
        <ul className='flex gap-16 p-6 text-black text-xl'>
          <li>Blog</li>
          <li>Single post</li>
          <li>Categories</li>
          </ul>
        <div className='flex gap-8 p-6'>
        <BsFacebook/>
          <BsTwitter/>
          <BsInstagram/>
          <BsSearch/>
        </div>
    </nav>
>>>>>>> 36c36e08a3b030b189d9aa9093d153bbdc9c6531
  )
}

export default Navbar;
