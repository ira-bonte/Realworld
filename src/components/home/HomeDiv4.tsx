import React from 'react'
import {BsInstagram} from 'react-icons/bs'
import {} from 'react-icons/fa'
import {BiSolidBadgeCheck} from 'react-icons/bi'
import rapLogo from '../../assets/img/instagram/rap/logo.png'
import { NavLink } from 'react-router-dom'
const HomeDiv4 = () => {
  return (
    <div>
      {/* instagram */}
      <div>
        <a href='https://www.instagram.com/p/Cy3jAIHOV7b/?hl=en' className= " flex ">
          <BsInstagram/>
          <img src={rapLogo} alt="Rap profile" className=' w-12 h-12 object-cover ' />
          <span>rap</span>
          <BiSolidBadgeCheck/>
        </a>
      </div>
    </div>
  )
}

export default HomeDiv4
