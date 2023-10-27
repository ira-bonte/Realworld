import { useState, useEffect } from 'react';
// import moment from 'moment'; // Import the date/time library
// images
import bbcNewsSliderOne from '../../assets/img/news/bbcNews-1.jpg'
import IgiheLogo from '../../assets/img/logo/igihe-logo copy.png'
import CogoByadogereye from '../../assets/img/news/igihe-1 copy.jpg'
import { formatDistanceToNow } from 'date-fns';
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
}
const BbcNews = () => {
  const someDate = new Date('2023-10-25T12:50:00Z'); // Replace with your date
  return (
    <div>
      <a href="./" className=' h-[450px] w-[990px]'>
        <img src={CogoByadogereye} alt="m23 " className=' h-[450px] w-[990px] object-cover rounded-md relative group' />
        <div className=' h-[450px] w-[990px] dark-background rounded-md -mt-[450px] absolute z-10 '></div>
        <div className=' -mt-56 absolute z-20 p-2'>
          <h1 className=' text-4xl text-red-500 font-bold'>
            Byadogereye muri kivu zo mbi
          </h1>
          <p className=' text-white w-96'>
            Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Vero temporibus repudiandae
            inventore pariatur numquam cumque possimus
          </p>
          <div className=' absolute z-40 flex mt-7'>
            <img src={IgiheLogo} alt=" bbc logo" className=' h-16' />
            <div className=' flex flex-col mt-2 '>
              <span className=' text-white '>Igihe News</span>
              {/* <span className='  text-gray-300'><p>{currentDateTime}</p></span> */}
              <p className='  text-gray-300'>Posted <TimeAgo date={someDate} />.</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}

export default BbcNews
