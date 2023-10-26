import React from 'react'
import logo1 from '../assets/img/png/logo-no-background.png';
import {BsFacebook,BsTwitter,BsInstagram,BsSearch} from 'react-icons/bs';
import { FaHome, FaMicrophone } from "react-icons/fa"
import Search from './navBar/Search';
const Navbar = () => {
  return(
    // const className= {
      //   nav: " h-16 z-50 fixed p-2 shadow-md shadow-orange-900 w-full  flex justify-between bg-white",
      //   navIcons : " text-3xl text-amber-950  cursor-pointer group-hover:text-amber-950 duration-500 hover:scale-105 hover:text-amber-600",
      //   navLink: " flex gap-2 group  hover:border-amber-950",
      //   span:" text-2xl  font-semibold text-amber-800   group-hover:text-amber-950 duration-300",
      //   uList: "flex gap-3 "
      // }
      <section>
    <nav className={className.nav}>
    {/* logo */}
    <div>
      <a href="./">
        <img src={logo1} alt=" Real word Logo" className=' h-12' />
      </a>
    </div>
    {/* list */}
    <ul className={className.uList}>
      <li>
        <a href="./" className={className.navLink}>
          <span className={className.span}>Home</span>
        </a>
      </li>
      <li>
        <a href="./" className={className.navLink}>
          <span className={className.span}>Categories</span>
        </a>
      </li>
      <li>
        <a href="./" className={className.navLink}>
          <span className={className.span}>Top News</span>
        </a>
      </li>
      <li>
        <a href="./" className={className.navLink}>
          <span className={className.span}>Popular News</span>
        </a>
      </li>
    </ul>
    <div>
      <ul className={className.uList}>
       <li>
          <div>
            <Search/>
          </div>
       </li>
        <li>
          <a href="./">
            <BsFacebook className={className.navIcons}/>
          </a>
        </li>
        <li>
          <a href="./">
            <BsInstagram className={className.navIcons}/>
          </a>
        </li>
        <li>
          <a href="./">
            <BsTwitter className={className.navIcons}/>
          </a>
        </li>
      </ul>
    </div>
  </nav>
  <div className=' text-red-600'>
  </div>
  </section>
  )
  // const className= {
  //   nav: " h-16 z-50 fixed p-2 shadow-md shadow-orange-900 w-full  flex justify-between bg-white",
  //   navIcons : " text-3xl text-amber-950  cursor-pointer group-hover:text-amber-950 duration-500 hover:scale-105 hover:text-amber-600",
  //   navLink: " flex gap-2 group  hover:border-amber-950",
  //   span:" text-2xl  font-semibold text-amber-800   group-hover:text-amber-950 duration-300",
  //   uList: "flex gap-3 "
  // }

  // return (

  //   <div>
  //   <nav className='flex gap-48 bg-gray-50 text-black h-24 w-full fixed z-10 p-2'>
  //     <a href=''>
  //         <img src={logo1} alt="" className='h-20 w-56 '/>
  //         </a>
  //         <div className=''></div>
  //       <ul className='flex gap-16 p-3 text-black text-xl '>
  //         <li><a href='#'>Blog</a></li>
  //         <li><a href='#'>Categories</a></li>
  //         <li><a href='#'>Contact</a></li>
  //         </ul>
  //         {/* media */}
  //       <div className='flex gap-8 p-3 text-2xl '>
  //         <a href='https://www.facebook.com'target='blank'><BsFacebook/></a>
  //         <a href='https://www.linkedin.com' target='blank'><BsLinkedin/></a>
  //         <a href='https://www.instagram.com' target='blank'><BsInstagram/></a>
  //         <a href=''><BsSearch/></a>
  //       </div>
  
}

export default Navbar