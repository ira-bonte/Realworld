import { BsFacebook, BsInstagram, BsSearch, BsLinkedin } from 'react-icons/bs';
import { FaChevronRight } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='bg-zinc-900 w-full text-white p-2 flex gap-10 flex-col '>
      <div className=' flex justify-between'>
          <div>
          <h2>About Realworl</h2>
          <div className='mt-7 text-2xl'>
            <h1>About</h1>
          </div>
          <p className='mt-7 opacity-70'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Magnam ab, perspiciatis beatae autem deleniti voluptate <br />
            nulla a dolores, exercitationem eveniet libero laudantium <br />
            recusandae officiis qui aliquid blanditiis omnis quae. <br />
            Explicabo?
          </p>
          <a href='#'>
            <div className='opacity-70 mt-4 hover:opacity-100 text-sm font-serif'>
              Learn More
            </div>
            <hr className='w-20' />
          </a>
        </div>
        <div>
          <h1>Navigation</h1>
          <div className='opacity-70 mt-3 p-2'>
            <ul>
              <li><a href='#'>Blog</a></li>
              <li><a href='#'>Categories</a></li>
              <li><a href='#'>Contact</a></li>
              <li className='flex hover:text-gray-950'><FaChevronRight /><a href='#'>Blog</a></li>
              <li className='flex hover:text-gray-950'><FaChevronRight /><a href='#'>Categories</a></li>
              <li className='flex hover:text-gray-950'><FaChevronRight /><a href='#'>Contact</a></li>
            </ul>
          </div>
        </div>
        <div>
          <h1>Navigation</h1>
          <div className='opacity-70 mt-3 p-2'>
            <ul>
              <li className='flex hover:text-gray-950'><FaChevronRight /><NavLink to='Food'>Home</NavLink></li>
              <li className='flex hover:text-gray-950'><FaChevronRight /><a href='#'>Blog</a></li>
              <li className='flex hover:text-gray-950'><FaChevronRight /><a href='#'>Categories</a></li>
              <li className='flex hover:text-gray-950'><FaChevronRight /><a href='#'>Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className='bg-black h-32 w-full text-white flex gap-[700px] p-10'>
        <div>
          <h1 className='pl-12'>© Copyright Realworld. All Rights Reserved</h1>
        </div>
        <div className='flex gap-8'>
          <Link to='https://www.facebook.com' target='_blank'>
            <BsFacebook />
          </Link>
          <Link to='https://www.linkedin.com' target='_blank'>
            <BsLinkedin />
          </Link>
          <Link to='https://www.instagram.com' target='_blank'>
            <BsInstagram />
          </Link>
          <a href='#'>
            <BsSearch />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
