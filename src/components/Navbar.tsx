import React, { useState } from 'react'
// import logo from '../assets/img/png/logo-no-background.png';
import logo from '../assets/img/png/logo.png'
import {BsFacebook,BsTwitter,BsInstagram,BsSearch, BsX} from 'react-icons/bs';
import { FaChevronDown, FaChevronRight, FaHome, FaList, FaMicrophone } from "react-icons/fa"
import Search from './navBar/Search';
import { NavLink, useMatch } from 'react-router-dom';
import CategoriesForm from './navBar/CategoriesForm';
const Navbar = () => {
  const className= {
    nav: " h-16 z-50 fixed p-2 shadow-md shadow-orange-900 w-full  flex justify-between bg-white",
    navIcons : " text-3xl text-amber-950  cursor-pointer group-hover:text-amber-950 duration-500 hover:scale-105 hover:text-amber-600",
    navLink: " flex gap-2 group  hover:border-amber-950 hover:border-b-2 duration-300",
    span:" text-2xl  font-semibold text-amber-800   group-hover:text-amber-950 duration-300 cursor-pointer",
    uList: "flex gap-3 max-lg:hidden mt-2",
    uListLeft: "flex gap-3 mt-2"
  }
  // hidden list
  const [list, setList] = useState(true);
  const toggleList = () => {
    setList(!list)
  }
  // when list is active
  const homeIsActive = useMatch("/");
  return (
    <nav className={className.nav}>
      {/* logo */}
      <div>
        <NavLink to="/">
          <img src={logo} alt=" Real word Logo" className=' h-12' />
        </NavLink>
      </div>
      {/* list */}
      <ul className={className.uList}>
        <li className={``}>
          <NavLink to='/' className={`flex gap-2 group  hover:border-amber-950 hover:border-b-2 duration-300  ${homeIsActive ? " text-amber-950 border-b-2 border-amber-950" : ""}  text-2xl  font-semibold text-amber-800   group-hover:text-amber-950 duration-300 cursor-pointer`}>
            <span className={``}>Home</span>
          </NavLink>
        </li>
        <li className=' group cursor-pointer duration-500'>
          <div className=' flex gap-1 group'>
            <span className={className.span}>Categories</span>
            <FaChevronDown className=" text-xl mt-2 text-amber-900 group-hover:text-amber-950"/>
          </div>
          <div className=' absolute z-50 group-hover:block hidden duration-300'>
            <CategoriesForm/>
          </div>
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
      {/* hidden list */}
        <div>
          <button className=' text-amber-950 hover:text-amber-600 duration-500 text-2xl mt-2 lg:hidden' onClick={toggleList}>
            {list ? <FaList/> : <BsX/>}
          </button>
        </div>
        {/* hidden list */}
        <div className={` ${list ? "hidden" : "visible"} lg:hidden`}>
          <ul className='absolute backdrop-blur-md bg-white mt-12 h-96 w-80 rounded-md p-2 m-2 shadow-lg shadow-amber-950 '>
            <li>
              <NavLink to='/' className="flex gap-2">
                <FaHome className={className.navIcons}/>
                <span className='text-xl font-semibold'>Home</span>
              </NavLink>
            </li>
          </ul>
        </div>
      <div className=' flex  gap-2'>
        
        <div className={` ${list ? "visible" : "hidden"}`}>
          <ul className={className.uListLeft}>
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
      </div>
    </nav>
  )
}

export default Navbar;
