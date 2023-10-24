import React, { useEffect, useState } from 'react'
import bbcLogo from '../../assets/img/logo/bbc-logo.png';
import igiheLogo from '../../assets/img/logo/igihe-logo copy.png'
import { format, formatDistanceToNow } from 'date-fns';
import { NavLink } from 'react-router-dom';
//time 
function TimeAgo ({date}){
  const [relativeTime, setRelativeTime] = useState(formatDistanceToNow(new Date(date)));
  useEffect(() => {
    const intervalId = setInterval(() => {
      const formattedTime = formatDistanceToNow(new Date(date));
      setRelativeTime(formattedTime);
    }, 60000);
    return () => clearInterval(intervalId);
  },[date]);
  return <span>{relativeTime} ago</span>
}
const Popular = () => {
  const someDate = new Date ('2023-10-24T15:00:00Z');
  return (
    <div>
      <NavLink to="/" className=' flex flex-col gap-1 hover:text-amber-900 duration-300'>
        <div className=' flex text-sm gap-1 text-gray-500 font '>
          <span className=' font-semibold'>Ukraine </span>
          <span className=' font-bold'>.</span>
          <p>Posted <TimeAgo date={someDate}/></p>
        </div>
        <div className=' flex flex-col '>
          <h3 className=' text-2xl font-serif '>Ukraine Shool Down</h3>
          <p className=' text-sm  '>
            Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Vero temporibus repudiandae
            inventore pariatur numquam cumque possimus
          </p>
        </div>
        <div className=' flex flex-row -ml-3 hover:scale-[1.01] duration-500'>
          <img src={bbcLogo} alt="BBC logo" className=' h-12 w-16 object-cover'/>
          <span className=' -ml-3 mt-2 text-gray-600'>BBC News</span>
        </div>
      </NavLink>
      <div className=' border-t border-gray-500'></div>
      {/* igihe news */}
      <NavLink to="/" className=' flex flex-col gap-1 hover:text-amber-900 duration-300'>
        <div className=' flex text-sm gap-1 text-gray-500 font '>
          <span className=' font-semibold'>Ukraine </span>
          <span className=' font-bold'>.</span>
          <p>Posted <TimeAgo date={someDate}/></p>
        </div>
        <div className=' flex flex-col '>
          <h3 className=' text-2xl font-serif '>Byadogereye muri kivu zo mbi</h3>
          <p className=' text-sm  '>
            Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Vero temporibus repudiandae
            inventore pariatur numquam cumque possimus
          </p>
        </div>
        <div className=' flex flex-row -ml-3 hover:scale-[1.01] duration-500'>
          <img src={igiheLogo} alt="BBC logo" className=' h-12 w-auto object-cover'/>
          <span className=' mt-2 text-gray-600'>Igihe</span>
        </div>
      </NavLink>
    </div>
  )
}

export default Popular
