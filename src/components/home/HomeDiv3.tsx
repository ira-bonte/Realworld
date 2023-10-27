import  { useEffect, useState } from 'react'
import { formatDistanceToNow } from 'date-fns';
// icons
import { BsHeart, BsHeartFill, BsInstagram } from 'react-icons/bs'
import {  FaRegComment, FaShareAlt } from 'react-icons/fa'
// images
import igiheLogo from '../../assets/img/logo/igihe-logo copy.png'
import messiOne from '../../assets/img/sport/messi-1.jpg'
import mbapeOne from '../../assets/img/sport/mbape-1.jpg'
import sitade from '../../assets/img/sport/1698155523037.jpeg'
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
const HomeDiv3 = () => {
    const someDate = new Date('2023-10-25T15:40:30Z');
    const someDateBruce = new Date('2023-10-25T17:40:30Z');
    // like
    const [likeInstagram,setLikeInstagramMess] = useState(false);
    const toggleLikeInstagram = () => {
        setLikeInstagramMess(!likeInstagram)
    } 
  return (
   <div className=' gap-2'>
    {/* 1st img */}
    <div className=' px-2 py-1 w-64'>
        <div className=' bg-white p-1 shadow-lg pl-2 py-2 rounded-md group hover:shadow-amber-950 duration-300 cursor-pointer gap-2 flex flex-col'>
            <div className=' flex justify-between'>
                <a href='https://www.instagram.com/leomessi/?hl=en' className=' flex gap-1'> 
                    <BsInstagram className=' text-2xl text-red-500  '/>
                    <span className=' text-gray-700 group-hover:text-red-500 font-semibold duration-300 cursor-pointer'>leomessi</span>
                    <small className=' text-gray-600 mt-1 ml-2'><TimeAgo date={someDate}/></small>
                </a>
            </div>
            <img src={messiOne} alt="messi" className=' h-52 w-56 object-cover rounded-md' />
            {/* sociol media icons */}
            <div className=" flex flex-row gap-4">
                {/* like */}
                <div className=' flex gap-1'>
                    <button className=' text-xl hover:text-red-500 text-gray-500 font-semibold' onClick={toggleLikeInstagram}>
                        {likeInstagram ? <BsHeartFill className="text-red-500 "/>: <BsHeart/>}
                    </button>
                    <span className=' text-gray-500'>
                        425k
                    </span>
                </div>
                <div className=' flex '>
                  <button className=' text-xl hover:text-red-500 text-gray-500 font-semibold flex gap-1'>
                    <FaRegComment/>
                        <span className=' text-gray-500 text-sm '>97k</span>
                    </button>  
                </div>
                
                <button className=' text-xl hover:text-red-500 text-gray-500 font-semibold'>
                    <FaShareAlt/>
                </button>
            </div>
        </div>
       {/* davido */}
       <div className=' bg-white p-2 mt-2 rounded-md shadow-lg hover:shadow-amber-950 duration-300 group cursor-pointer'>
          <div className=' mt-3 flex justify-between text-gray-400 group-hover:text-gray-700 duration-300'>
                <small>Posted <TimeAgo date={someDate} />.</small>
                <div>
                    <img src={igiheLogo} alt="igihe logo" className=' h-10 rounded-md' />
                </div>
            </div>
            <h3 className=' mt-5 text-10 text-gray-500 group-hover:text-red-500 duration-300 font-semibold font-serif'>
                imyaka itatu mu gikoni icyumvirizo ku 
                bihangange 5 bishobora kuza kuri alubumu 
                nshya Devido
            </h3>
            <div className=' mt-4'>
                <div>
                    <img src={mbapeOne} alt="img2" className=' h-52 w-56 rounded-md object-cover' />
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
            <h3 className=' mt-5 text-10 text-gray-500 group-hover:text-red-500 duration-300 font-semibold font-serif'>
                imyaka itatu mu gikoni icyumvirizo ku 
                bihangange 5 bishobora kuza kuri alubumu 
                nshya Devido
            </h3>
            <div className=' mt-4'>
                <div>
                    <img src={sitade} alt="img2" className=' h-52 w-56 rounded-md object-cover' />
                </div>
            </div>
        </div>
         
    </div>
   </div>
  )
}

export default HomeDiv3
