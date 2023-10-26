import React, { useState, useEffect } from 'react';
import moment from 'moment'; // Import the date/time library
import bbcNewsSliderOne from '../../assets/img/news/bbcNews-1.jpg'
import bbcLogo from '../../assets/img/logo/bbc-logo.png'
import { formatDistanceToNow } from 'date-fns';
import { NavLink } from 'react-router-dom';
import messiTwo from '../../assets/img/sport/messi-2.jpg'
//time ago
function TimeAgo({ date }) {
  const [relativeTime, setRelativeTime] = useState(formatDistanceToNow(new Date(date)));

  useEffect(() => {
    // Update the relative time every minute
    const intervalId = setInterval(() => {
      const formattedTime = formatDistanceToNow(new Date(date));
      setRelativeTime(formattedTime);
    }, 60000); // Update every minute

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [date]);

    // return <span>{relativeTime} ago</span>;
}

const MessVideo = () => {
    const someDate = new Date('2023-10-25T15:00:00Z'); 
  return (
    <div>
      <div>
      <NavLink to='/messVideos' className=' h-[450px] w-[990px]'>
        <img src={messiTwo} alt="messi top gorl " className=' h-[450px] w-[990px] object-cover rounded-md relative group' />
        <div className=' h-[450px] w-[990px] dark-background rounded-md -mt-[450px] absolute z-10 '></div>
        <div className=' -mt-56 absolute z-20 p-2'>
          <h2 className=' text-4xl text-red-500 font-bold'>
            Top 10 Goals of Lionel Messi _ Best Goals of Messi
          </h2>
          <p className=' text-white w-96'>
            Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Vero temporibus repudiandae
            inventore pariatur numquam cumque possimus
          </p>
          <a href='./' className=' absolute z-40 flex mt-7'>
            <img src={bbcLogo} alt=" bbc logo" className=' h-16' />
            <div className=' flex flex-col mt-2 '>
              <span className=' text-white '>BBC NEWS</span>
              {/* <span className='  text-gray-300'><p>{currentDateTime}</p></span> */}
              <p className='  text-gray-300'>Posted <TimeAgo date={someDate} />.</p>
            </div>
          </a>
        </div>
      </NavLink>
    </div>
    </div>
  )
}

export default MessVideo
