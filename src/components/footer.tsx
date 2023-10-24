import React from 'react'
import {BsFacebook,BsInstagram,BsSearch, BsLinkedin} from 'react-icons/bs'
import {FaChevronRight} from 'react-icons/Fa'
const footer = () => {
  return (
        <div className=' bg-zinc-900 h-96 w-full text-white p-11 flex gap-40'>
        <div>
            <h2>About Realworld</h2>
            <div className='mt-7'>
          <div className=' text-2xl'>
            <h1>About</h1>
            </div>
            <div className='mt-7 opacity-70'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
             Magnam ab, perspiciatis beatae autem deleniti voluptate <br />
              nulla a dolores, exercitationem eveniet libero laudantium <br />
               recusandae officiis qui aliquid blanditiis omnis quae. <br />
                Explicabo?
            </div>
            <a href="#">
              <div className=' opacity-70 mt-4 hover:opacity-100 text-sm font-serif'>
              Learn More
              </div>
              <hr className=' w-20' />
              </a>
            </div>
            <h1>Navigation</h1>
            <div>
              <h1>Navigation</h1>
              <div className=' opacity-70 mt-3 p-2'>
                <ul>
               <li><a href="#">Blog</a></li> 
               <li><a href="#">Categories</a></li> 
               <li><a href="#">Contact</a></li>
               <li className=' flex hover:text-gray-950'><FaChevronRight/><a href="#">Blog</a></li> 
               <li className=' flex hover:text-gray-950'><FaChevronRight/><a href="#"> Categories</a></li> 
                <li className=' flex hover:text-gray-950'><FaChevronRight/><a href="#"> Contact</a></li>
                </ul>
                </div>
                </div>
                <div>
              <h1>Navigation</h1>
              <div className=' opacity-70 mt-3 p-2'>
                <ul>
               <li className=' flex hover:text-gray-950'><FaChevronRight/><a href="#">Blog</a></li> 
               <li className=' flex hover:text-gray-950'><FaChevronRight/><a href="#"> Categories</a></li> 
                <li className=' flex hover:text-gray-950'><FaChevronRight/><a href="#"> Contact</a></li>
                </ul>
                </div>
            </div>
        </div>
        <div className=' bg-black h-32 w-full text-white flex gap-[700px] p-12'>
            <div>
                <h1 className='pl-12'>© Copyright Realworld. All Rights Reserved</h1>
            </div>
            <div className='flex gap-8'>
            <a href="https://www.facebook.com" target='blank'>
            <BsFacebook/>
          </a>
          <a href="https://www.linkedin.com" target='blank'>
          <BsLinkedin/>
          </a>
          <a href="https://www.instagram.com" target='blank'>
          <BsInstagram/>
          </a>
          <a href="#">
          <BsSearch/>
          </a>
            </div>

        </div>
    </div>
  )
}


export default footer;