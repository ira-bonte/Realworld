import React from 'react'
import logo1 from '../assets/img/png/logo-no-background.png';
import {BsFacebook,BsTwitter,BsInstagram,BsSearch} from 'react-icons/bs';
import { FaHome, FaMicrophone } from "react-icons/fa"
import Search from './navBar/Search';
import { NavLink } from 'react-router-dom';
import CategoriesForm from './navBar/CategoriesForm';
const Navbar = () => {
  const className= {
    nav: " h-16 z-50 fixed p-2 shadow-md shadow-orange-900 w-full  flex justify-between bg-white",
    navIcons : " text-3xl text-amber-950  cursor-pointer group-hover:text-amber-950 duration-500 hover:scale-105 hover:text-amber-600",
    navLink: " flex gap-2 group  hover:border-amber-950",
    span:" text-2xl  font-semibold text-amber-800   group-hover:text-amber-950 duration-300 cursor-pointer",
    uList: "flex gap-3 max-lg:hidden",
    uListLeft: "flex gap-3"
  }
  return (
    <nav className={className.nav}>
      {/* logo */}
      <div>
        <NavLink to="/">
          <img src={logo1} alt=" Real word Logo" className=' h-12' />
        </NavLink>
      </div>
      {/* list */}
      <ul className={className.uList}>
        <li>
          <a href="./" className={className.navLink}>
            <span className={className.span}>Home</span>
          </a>
        </li>
        <li className=' group cursor-pointer duration-500'>
          <span className={className.span}>Categories</span>
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
      <div>
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
    </nav>
  )
}

export default Navbar;
