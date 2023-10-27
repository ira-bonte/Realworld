import {BsHeart, BsHeartFill, BsInstagram} from 'react-icons/bs'
//icons
import { FaHeart, FaRegComment, FaShareAlt } from 'react-icons/fa'
import {BiSolidBadgeCheck} from 'react-icons/bi'
import rapLogo from '../../assets/img/instagram/rap/logo.png'
import InstagramRapOne from '../../assets/img/instagram/rap/rap_1698341124299.jpeg'
import { formatDistanceToNow } from 'date-fns';
import { useEffect, useState } from 'react';
/////////////
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
 

const HomeDiv4 = () => {
  const someDate = new Date('2023-10-27T15:00:00Z');
 // like
 const [likeInstagram,setLikeInstagramMess] = useState(false);
 const toggleLikeInstagram = () => {
     setLikeInstagramMess(!likeInstagram)
 } 
  return (
    <div className=' flex flex-col bg-white p-2 rounded-md shadow-lg hover:shadow-amber-950 duration-300 w-80 group'>
      {/* instagram */}
      <div className=' flex  gap-4'>
        <a href='https://www.instagram.com/p/Cy3jAIHOV7b/?hl=en' className= " flex flex-row gap-1 ">
          <BsInstagram className= " text-3xl text-red-500 "/>
          <div className=' flex gap-0 -mt-1'>
            <img src={rapLogo} alt="Rap profile" className=' w-10 h-10 object-cover rounded-full' />
            <span className=' text-2xl font-semibold '>rap</span>
          </div>
          <BiSolidBadgeCheck className= " text-2xl text-green-500 mt-1 "/>
        </a>
        <span><p className='  text-gray-300 group-hover:text-amber-950 duration-300'> <TimeAgo date={someDate} />.</p></span>
      </div>
      {/* image */}
      <div className=' flex flex-col gap-2'>
        <img src={InstagramRapOne} alt=" Police" className=' w-80 h-[360px] object-cover rounded-md cursor-pointer ' />
        {/* sociol media icons */}
        <div className=" flex flex-row gap-4">
                {/* like */}
                <div className=' flex gap-1'>
                    <button className=' text-xl hover:text-red-500 text-gray-500 font-semibold' onClick={toggleLikeInstagram}>
                        {likeInstagram ? <BsHeartFill className="text-red-500 "/>: <BsHeart/>}
                    </button>
                    <span className=' text-gray-500'>
                        135k
                    </span>
                </div>
                <div className=' flex '>
                  <button className=' text-xl hover:text-red-500 text-gray-500 font-semibold flex gap-1'>
                    <FaRegComment/>
                        <span className=' text-gray-500 text-sm '>7k</span>
                    </button>  
                </div>
                
                <button className=' text-xl hover:text-red-500 text-gray-500 font-semibold'>
                    <FaShareAlt/>
                </button>
            </div>
      </div>
    </div>
  )
}

export default HomeDiv4
