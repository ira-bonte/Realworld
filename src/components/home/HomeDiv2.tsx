

import React, { useEffect, useState } from 'react'
import { formatDistanceToNow } from 'date-fns';
// images
import Igihe2 from '../../assets/img/news/pexels-алесь-усцінаў-11518767.jpg'
import Igihe1 from '../../assets/img/news/pexels-алесь-усцінаў-11477799.jpg'
import davidoOne from '../../assets/img/news/davido-1.jpeg'
import addsOne from '../../assets/video/adds/adds-1.mp4'
import bbcNews from '../../assets/img/news/bbcNews-1.jpg'

import bruceMerodeOne from '../../assets/img/news/brucemelodie-1.jpeg'
import igiheLogo from '../../assets/img/logo/igihe-logo copy.png'
// time sport 
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

const HomeDiv2 = () => {
    const someDate = new Date('2023-10-25T15:40:30Z');
    const someDateBruce = new Date('2023-10-25T17:40:30Z');
  return (
   <div className=' gap-2'>
    {/* 1st img */}
    <div className=' px-2 py-1 w-64'>
        <div className=' bg-white p-1 shadow-lg pl-2 py-2 rounded-md group hover:shadow-amber-950 duration-300 cursor-pointer'>
            <video src={addsOne} controls className=' h-52 w-56 object-cover rounded-md' />
            <p className=' text-gray-500 group-hover:text-red-500 font-semibold duration-300 cursor-pointer'>
                Kenny K-Shot, Nikita Heaven - Lowkey Lyrics Visuals
            </p>

        </div>
       {/* davido */}
       <div className=' bg-white p-2 mt-2 rounded-md shadow-lg hover:shadow-amber-950 duration-300 group cursor-pointer'>
          <div className=' mt-3 flex justify-between text-gray-400 group-hover:text-gray-700 duration-300'>
                <small>Posted <TimeAgo date={someDate} />.</small>
                <div>
                    <img src={igiheLogo} alt="igihe logo" className=' h-10 rounded-md' />
                </div>
            </div>
            <h3 className=' mt-5 text-10 font-serif text-gray-500 group-hover:text-red-500 duration-300 font-semibold font-serif'>
                imyaka itatu mu gikoni icyumvirizo ku 
                bihangange 5 bishobora kuza kuri alubumu 
                nshya Devido
            </h3>
            <div className=' mt-4'>
                <div>
                    <img src={davidoOne} alt="img2" className=' h-52 w-56 rounded-md object-cover' />
                </div>
            </div>
        </div>
       <div className=' bg-white p-2 mt-2 rounded-md shadow-lg hover:shadow-amber-950 duration-300 group cursor-pointer'>
          <div className=' mt-3 flex justify-between text-gray-400 group-hover:text-gray-700 duration-300'>
                <small>Posted <TimeAgo date={someDateBruce} />.</small>
                <div>
                    <img src={igiheLogo} alt="igihe logo" className=' h-10 rounded-md' />
                </div>
            </div>
            <h3 className=' mt-5 text-10 font-serif text-gray-500 group-hover:text-red-500 duration-300 font-semibold font-serif'>
                imyaka itatu mu gikoni icyumvirizo ku 
                bihangange 5 bishobora kuza kuri alubumu 
                nshya Devido
            </h3>
            <div className=' mt-4'>
                <div>
                    <img src={bruceMerodeOne} alt="img2" className=' h-52 w-56 rounded-md object-cover' />
                </div>
            </div>
        </div>
         
    </div>
   </div>
  )
}

export default HomeDiv2
