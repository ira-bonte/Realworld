import React, { useState, useEffect } from 'react';
import moment from 'moment'; // Import the date/time library
import bbcNewsSliderOne from '../../assets/img/news/bbcNews-1.jpg'
import bbcLogo from '../../assets/img/logo/bbc-logo.png'
import { formatDistanceToNow } from 'date-fns';
import { NavLink } from 'react-router-dom';
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

  return <span>{relativeTime} ago</span>;
    // return <span>{relativeTime} ago</span>;
}


const BbcNews = () => {
  const someDate = new Date('2023-10-24T15:00:00Z'); // Replace with your date

  // const [currentDateTime, setCurrentDateTime] = useState('');

  // useEffect(() => {
  //
  //   const intervalId = setInterval(() => {
  //     const now = moment(); // Create a moment object representing the current date and time
  //     setCurrentDateTime(now.format('YYYY-MM-DD HH:mm:ss')); // Format the date and time as desired
  //   }, 1000);

  //   // Clean up the timer when the component unmounts
  //   return () => clearInterval(intervalId);
  // }, []);
  
  return (
    <div>
      <NavLink to='culture' className=' h-[450px] w-[990px]'>
        <img src={bbcNewsSliderOne} alt="Ukraine hoes " className=' h-[450px] w-[990px] object-cover rounded-md relative group' />
        <div className=' h-[450px] w-[990px] dark-background rounded-md -mt-[450px] absolute z-10 '></div>
        <div className=' -mt-56 absolute z-20 p-2'>
          <h1 className=' text-4xl text-red-500 font-bold'>
            Ukraine Shool Down
          </h1>
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
  )
}

export default BbcNews
