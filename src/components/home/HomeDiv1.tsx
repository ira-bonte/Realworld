import React, { useEffect,useState } from 'react';
import YouTube from 'react-youtube';
import { formatDistanceToNow } from 'date-fns';
// images
import LatestGaza from '../../assets/img/news/Latest photos from-Gaza.jpg'
import bbcLogo from '../../assets/img/logo/bbc-logo.png'
import { NavLink } from 'react-router-dom';
// time
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
const HomeDiv1 = () => {
  // time
  const someDate = new Date('2023-12-24T15:00:00Z');
  // video
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const videoId = 'Ou_CkfqsAg0';

  const opts = {
    height: '280',
    width: '400',
    playerVars: {
      autoplay: 1,
    },
  };

  const toggleVideo = () => {
    setIsVideoOpen(!isVideoOpen);
  };

  return (
    <div className="relative w-[410px] h-screen flex-col flex gap-2 rounded-md">
      <div className=' flex flex-col gap-1 bg-white  shadow-lg hover:shadow-amber-950 duration-300  px-2 rounded-md'>
        {/* ads */}
        <span className=' text-amber-900 font-bold font-serif '>Ads</span>
        <div
          onClick={toggleVideo}
          className={`cursor-pointer transition-opacity duration-300 ${isVideoOpen ? 'opacity-0' : 'opacity-100'}`}
        >
          <img
            src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
            alt="Video Thumbnail"
            className="w-[400px] h-[280px] object-cover rounded-md"
          />
        </div>
        {isVideoOpen && (
          <div className="absolute inset-0 w-[400px] h-[280px] object-cover rounded-md">
            <YouTube videoId={videoId} opts={opts} className="w-full h-full" />
          </div>
        )}
        <div>
          <span className=' text-lg font-bold text-amber-950 text-center'>
            FIFI RAYA - CYANE (Official Video) 
          </span>
          <p>New Song</p>
        </div>
      </div>
      {/* news */}
      <NavLink to="/LatestGaza" className='flex flex-col gap-1 bg-white  shadow-lg hover:shadow-amber-950 duration-300  px-2 rounded-md py-2'>
        <div>
          <img src={LatestGaza} alt=" Latest gaza image" className=' w-[400px] h-[280px] object-cover rounded-md'/>
        </div>
        {/* header of news */}
        <div className=' flex flex-col gap-2'>
          <h3 className=' text-red-500 font-semibold text-2xl font-serif'>
          We don't have time to cry', says teenager in voice note from Gaza
          </h3>
          <p className=' text-sm text-gray-900 hover:text-black duration-300'>
          A foreign person asks: 'Well, how do you feel?' Thanks for your
           question. We don't feel. We don't cry. We don't have the time to
            mourn our beloved because others are being killed. We don't have 
            time to feel. We just have the time to smell death coming closer
             and closer. We just have time to sit in one room and hug each other,
              asking God to take our souls together.
          </p>
          <a href='https://www.bbc.com/news/live/world-middle-east-67201465' target="_blank" rel="noopener noreferrer" className=' -ml-6  flex gap-0'>
            <img src={bbcLogo} alt="bbc logo" className='h-16 ' />
            <span className=' -ml-6 mt-4 text-gray-600'>BBC NEWS</span>
          </a>
          <span className=' mt-4 text-gray-500'>Posted <TimeAgo date={someDate} />.</span>
        </div>
      </NavLink>
    </div>
  );
};

export default HomeDiv1;
