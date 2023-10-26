// import React from 'react'
// import {BsFacebook,BsTwitter,BsInstagram,BsSearch,} from 'react-icons/bs'
// import {FaChevronRight} from 'react-icons/Fa'
// import { NavLink } from 'react-router-dom'

// const Footer = () => {
//   return (
//     <div>
        
//         <div className=' bg-zinc-900 h-96 w-full text-white p-11 flex gap-40'>
//         <div>
//           <div className=' text-2xl'>
//             <h1>About</h1>
//             </div>
//             <div className='mt-7 opacity-70'>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
//              Magnam ab, perspiciatis beatae autem deleniti voluptate <br />
//               nulla a dolores, exercitationem eveniet libero laudantium <br />
//                recusandae officiis qui aliquid blanditiis omnis quae. <br />
//                 Explicabo?
//             </div>
//             <a href="#">
//               <div className=' opacity-70 mt-4 hover:opacity-100 text-sm font-serif'>
//               Learn More
//               </div>
//               <hr className=' w-20' />
//               </a>
//             </div>
//             <div>
//               <h1>Navigation</h1>
//               <div className=' opacity-70 mt-3 p-2'>
//                 <ul>
//                <li className=' flex hover:text-gray-950'><FaChevronRight/><a href="#">Home</a></li> 
//                <li className=' flex hover:text-gray-950'><FaChevronRight/><a href="#">Blog</a></li> 
//                <li className=' flex hover:text-gray-950'><FaChevronRight/><a href="#"> Categories</a></li> 
//                <li className=' flex hover:text-gray-950'><FaChevronRight/><a href="#">Single Post</a></li> 
//                 <li className=' flex hover:text-gray-950'><FaChevronRight/><a href="#">About us</a></li>
//                 <li className=' flex hover:text-gray-950'><FaChevronRight/><a href="#"> Contact</a></li>
//                 </ul>
//                 </div>
//                 </div>
//                 <div>
//               <h1>Navigation</h1>
//               <div className=' opacity-70 mt-3 p-2'>
//                 <ul>
//                <li className=' flex hover:text-gray-950'><FaChevronRight/><NavLink to="Food">Home</NavLink></li> 
//                <li className=' flex hover:text-gray-950'><FaChevronRight/><a href="#">Blog</a></li> 
//                <li className=' flex hover:text-gray-950'><FaChevronRight/><a href="#"> Categories</a></li> 
//                <li className=' flex hover:text-gray-950'><FaChevronRight/><a href="#">Single Post</a></li> 
//                 <li className=' flex hover:text-gray-950'><FaChevronRight/><a href="#">About us</a></li>
//                 <li className=' flex hover:text-gray-950'><FaChevronRight/><a href="#"> Contact</a></li>
//                 </ul>
//                 </div>
//             </div>
//         </div>
//         <div className=' bg-black h-32 w-full text-white flex gap-[700px] p-12'>
//             <div>
//                 <h1>© Copyright Realworld. All Rights Reserved</h1>
//             </div>
//             <div className='flex gap-8'>
//             <a href="#">
//             <BsFacebook/>
//           </a>
//           <a href="#">
//           <BsTwitter/>
//           </a>
//           <a href="#">
//           <BsInstagram/>
//           </a>
//           <a href="#">
//           <BsSearch/>
//           </a>
//             </div>

//         </div>
//     </div>
//   )
// }


// export default Footer
import React from 'react';
import { BsFacebook, BsTwitter, BsInstagram, BsSearch } from 'react-icons/bs';
import { FaChevronRight } from 'react-icons/fa'; // Fixed the import

import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <div className='bg-zinc-900 h-96 w-full text-white p-11 flex gap-40'>
        <div>
          <div className='text-2xl'>
            <h1>About</h1>
          </div>
          <div className='mt-7 opacity-70'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Magnam ab, perspiciatis beatae autem deleniti voluptate <br />
            nulla a dolores, exercitationem eveniet libero laudantium <br />
            recusandae officiis qui aliquid blanditiis omnis quae. <br />
            Explicabo?
          </div>
          <a href='#'>
            <div className='opacity-70 mt-4 hover:opacity-100 text-sm font-serif'>
              Learn More
            </div>
            <hr className='w-20' />
          </a>
        </div>
        <div>
          <h1>Navigation (Anchor Tags)</h1>
          <div className='opacity-70 mt-3 p-2'>
            <ul>
              <li className='flex hover:text-gray-950'>
                <FaChevronRight />
                <a href='#'>Home</a>
              </li>
              <li className='flex hover:text-gray-950'>
                <FaChevronRight />
                <a href='#'>Blog</a>
              </li>
              <li className='flex hover:text-gray-950'>
                <FaChevronRight />
                <a href='#'>Categories</a>
              </li>
              <li className='flex hover:text-gray-950'>
                <FaChevronRight />
                <a href='#'>Single Post</a>
              </li>
              <li className='flex hover:text-gray-950'>
                <FaChevronRight />
                <a href='#'>About us</a>
              </li>
              <li className='flex hover:text-gray-950'>
                <FaChevronRight />
                <a href='#'>Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h1>Navigation (React Router)</h1>
          <div className='opacity-70 mt-3 p-2'>
            <ul>
              <li className='flex hover:text-gray-950'>
                <FaChevronRight />
                <NavLink to='/Food'>Home</NavLink>
              </li>
              <li className='flex hover:text-gray-950'>
                <FaChevronRight />
                <NavLink to='/Blog'>Blog</NavLink>
              </li>
              <li className='flex hover:text-gray-950'>
                <FaChevronRight />
                <NavLink to='/Categories'>Categories</NavLink>
              </li>
              <li className='flex hover:text-gray-950'>
                <FaChevronRight />
                <NavLink to='/SinglePost'>Single Post</NavLink>
              </li>
              <li className='flex hover:text-gray-950'>
                <FaChevronRight />
                <NavLink to='/AboutUs'>About us</NavLink>
              </li>
              <li className='flex hover:text-gray-950'>
                <FaChevronRight />
                <NavLink to='/Contact'>Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='bg-black h-32 w-full text-white flex gap-[700px] p-12'>
        <div>
          <h1>© Copyright Realworld. All Rights Reserved</h1>
        </div>
        <div className='flex gap-8'>
          <a href='#'>
            <BsFacebook />
          </a>
          <a href='#'>
            <BsTwitter />
          </a>
          <a href='#'>
            <BsInstagram />
          </a>
          <a href='#'>
            <BsSearch />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
