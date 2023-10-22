import React from 'react'
import {BsFacebook,BsTwitter,BsInstagram,BsSearch} from 'react-icons/bs'

const footer = () => {
  return (
    <div>
        
        <div className=' bg-zinc-900 h-96 w-full text-white p-11 flex gap-40'>
        <div>
            <h1><u>About</u></h1>
            <div className='mt-7'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
             Magnam ab, perspiciatis beatae autem deleniti voluptate <br />
              nulla a dolores, exercitationem eveniet libero laudantium <br />
               recusandae officiis qui aliquid blanditiis omnis quae. <br />
                Explicabo?
            </div>
            <a href="#"><u>Learn More</u></a>
            </div>
            <div>
                <ul>
               <li><a href="#">Home</a></li> 
               <li><a href="#">Blog</a></li> 
               <li><a href="#"> Categories</a></li> 
               <li><a href="#">Single Post</a></li> 
                <li><a href="#">About us</a></li>
                <li><a href="#"> Contact</a></li>
                </ul>
            
            </div>
        </div>
        <div className=' bg-black h-32 w-full text-white flex gap-[700px] p-12'>
            <div>
                <h1>© Copyright Realworld. All Rights Reserved</h1>
            </div>
            <div className='flex gap-8'>
            <a href="./">
            <BsFacebook/>
          </a>
          <a href="#">
          <BsTwitter/>
          </a>
          <a href="#">
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


export default footer