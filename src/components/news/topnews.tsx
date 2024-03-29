import React from 'react';
import Image1 from '../../assets/img/news/firefighters.jpg';
import Igihe1 from '../../assets/img/news/bomb.jpg';
import bbcNews from '../../assets/img/news/pexels-алесь-усцінаў-11477799.jpg';
import Igihe2 from '../../assets/img/news/pexels-алесь-усцінаў-11734710.jpg';
import Image2 from '../../assets/img/news/tornado.jpg';
import Image3 from '../../assets/img/news/soldiers.jpg';
import pic from '../../assets/img/png/logo-white.png';
import image from '../../assets/img/news/Car accident.jpg';
import Igihe3 from '../../assets/img/news/pexels-алесь-усцінаў-11678923.jpg';
import { NavLink } from 'react-router-dom';

const Topnews = () => {
  return (
    // The top News
    <div className='p-20 flex gap-16'>
      {/* part1 */}
      <div className='mt-10'>
        <a href="#">
          <img src={Image1} alt="img1" className='h-52 w-80 object-cover' />
        </a>
        <NavLink to="/culture">
          <img src={Igihe1} alt="img1" className='h-52 w-80' />
        </NavLink>
        <div className='mt-7'>
          <small>CULTURE • JUL 5TH '22</small>
        </div>
        <div className='mt-7 text-3xl font-serif'>
          <NavLink to="/culture">
            <h1>
              Firefighters Battle <br />Intense Inferno,<br /> Houses Reduced to Ashes
            </h1>
          </NavLink>
        </div>
        <div className='mt-7'>

          Lorem ipsum dolor sit, amet consectetur <br />
          adipisicing elit. Vero temporibus repudiandae <br />
          inventore pariatur numquam cumque possimus <br />
          exercitationem? Nihil tempore odit ab minus <br />
          eveniet praesentium, similique blanditiis <br />
          molestiae ut saepe perspiciatis officia nemo, <br />
          eos quae cumque. Accusamus fugiat architecto <br />
          rerum animi atque eveniet, quo, praesentium <br />
          dignissimos

        </div>
        <div className='mt-5 flex gap-4'>
          <img src={pic} alt="" className='h-7 w-7 rounded-full object-cover' />
          <p>Cameron Williamson</p>
        </div>
      </div>
      {/* part2 */}
      <div className=' border-x pr-10 pl-10'>
        {/* 1 */}
        <a href="#">
          <img src={Igihe2} alt="img2" className='object-cover w-52 h-40 mt-7' />
        </a>
        <NavLink to="/culture">
          <img src={Igihe2} alt="img2" className='w-52 h-40 mt-7' />
        </NavLink>
        <div className='mt-5'>
          <small>SPORT • JUL 5TH '22</small>
        </div>
        <div className='mt-5 text-10 font-serif'>
          <NavLink to="/culture">
            <h1>
              Earthquake Shakes Neighborhood, <br />
              Causes Structural Damage
            </h1>
          </NavLink>
        </div>
        {/* 2 */}
        <a href="#">
          <img src={Image3} alt="img3" className='w-52 h-40 mt-7 object-cover' />
        </a>
        <NavLink to="/culture">
          <img src={bbcNews} alt="img3" className='w-52 h-40 mt-7' />
        </NavLink>
        <div className='mt-5'>
          <small>FOOD • JUL 17TH '22</small>
        </div>
        <div className='mt-5 text-10 font-serif'>
          <NavLink to="/culture">
            <h1>
              Brave Soldiers Defend Homeland <br />Against Enemy Forces
            </h1>
          </NavLink>
        </div>
        {/* 3 */}
        <a href="">
          <img src={image} alt="img4" className=' object-cover w-52 h-40 mt-7' />
        </a>
        <div className='mt-5'>
          <small>DESIGN • MAR 15TH '22</small>
        </div>
        <div className='mt-5 text-10 font-serif'>
          <NavLink to="/culture">
            <h1>
              Why Craigslist Tampa Is <br />
              One of The Most <br />
              Interesting Places On the <br />
              Web?
            </h1>
          </NavLink>
        </div>
      </div>
      {/* part3 */}
      <div>
        {/* 1 */}
        <a href="#">
          <img src={Igihe1} alt="img5" className='w-52 h-40 mt-7 object-cover' />
        </a>
        <NavLink to="/culture">
          <img src={Igihe1} alt="img5" className='w-52 h-40 mt-7' />
        </NavLink>
        <div className='mt-5'>
          <small>BUSINESS • JUL 5TH '22</small>
        </div>
        <div className='mt-5 text-10 font-serif'>
          <NavLink to="/culture">
            <h1>
              6 Easy Steps To Create <br />
              Your Own Cute Merch <br />
              For Instagram
            </h1>
          </NavLink>
        </div>
        {/* 2 */}
        <a href="#">
          <img src={bbcNews} alt="img6" className='w-52 h-40 mt-7 object-cover' />
        </a>
        <NavLink to="/culture">
          <img src={bbcNews} alt="img6" className='w-52 h-40 mt-7' />
        </NavLink>
        <div className='mt-5'>
          <small>TECH • MAR 1ST '22</small>
        </div>
        <div className='mt-5 text-10 font-serif'>
          <NavLink to="/culture">
            <h1>
              10 Life-Changing Hacks <br />
              Every Working Mom <br />
              Should Know
            </h1>
          </NavLink>
        </div>
        {/* 3 */}
        <a href="#">
          <img src={Image2} alt="img7" className='w-52 h-40 mt-7 object-cover' />
        </a>
        <NavLink to="/culture">
          <img src={Igihe1} alt="img7" className='w-52 h-40 mt-7' />
        </NavLink>

        <div className='mt-5'>
          <small>TRAVEL • JUL 5TH '22</small>
        </div>
        <div className='mt-5 text-10 font-serif'>
          <NavLink to="/culture">
            <h1>
              Earthquake Shakes Neighborhood, <br />
              Causes Structural Damage
            </h1>
          </NavLink>
        </div>
      </div>

      <div className=' border'>
        <div className=' p-10 border-b text-3xl font-serif'>
          Trending
        </div>

        <div className=' p-10 border-b text-4'>
          The Best Homemade <br />
          Masks for Face (keep <br />
          the Pimples Away)
          Jane Cooper
        </div>

        <div className=' p-10 border-b text-4'>
          17 Pictures of Medium <br />
          Length Hair in Layers <br />
          That Will Inspire Your <br />
          New Haircut
          Wade Warren
        </div>

        <div className=' p-10 border-b text-4'>
          13 Amazing Poems <br />
          from Shel Silverstein <br />
          with Valuable Life <br />
          Lessons
          Esther Howard
        </div>

        <div className=' p-10 border-b text-4'>
          9 Half-up/half-down  <br />
          Hairstyles for Long <br />
          and Medium Hair <br />
          Cameron Williamson
        </div>
        <div className=' p-10 border-b text-4'>
          Life Insurance And <br />
          Pregnancy: A Working <br />
          Mom’s Guide <br />
          Jenny Wilson
        </div>
      </div>
    </div>
  )
}

export default Topnews;
