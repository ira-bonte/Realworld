import messi from '../../assets/img/sport/1698151778442.jpeg'
import React, { useEffect } from 'react'
import messiVideos from '../../assets/video/sport/Top 10 Goals of Lionel Messi _ Best Goals of Messi.mp4'
import messiFive from '../../assets/img/sport/messi-5.jpeg'
import messiSix from '../../assets/img/sport/messi-6.jpeg'
import peopleBruno from '../../assets/people/BrunoRwanda.jpg'
import { BsHeart, BsShare } from 'react-icons/bs'
import { FaComment } from 'react-icons/fa'
import HomeDiv4 from '../home/HomeDiv4';
import HomeDiv1 from '../home/HomeDiv1'
import messiOtherImage from './messi/messiOtherImage';
//start
const MessVideoNews = () => {
    useEffect(() => {
        document.title= "Top 10 Goals of Lionel Messi _ Best Goals of Messi"
    })
  return (
    <section className=' pt-20 px-2 w-[746px] py-2 flex gap-2 max-lg:flex-col'>
      <div className=' flex gap-1 flex-col bg-white p-2 text-gray-700 shadow-lg rounded-md  hover:shadow-amber-950  duration-300  '>
        {/* header */}
        <div>
          <h2 className=' text-amber-700 text-4xl font-bold font-serif  cursor-pointer '>
              Top 10 Goals of Lionel Messi  Best Goals 🫢🫢 Videos
          </h2>
          <p className=' text-lg font-medium '>
            Lionel Messi has been in Inter Miami CF for only a few months, but he has already made a significant impact on the team. He has scored **11 goals** in 14 matches across all competitions ⁴. Here are some of his best goals in Inter Miami CF: <br />
          </p>
         </div>
         <div className=' flex gap-2 flex-col '>
            <video src={messiVideos} controls  className=' h-[420px] w-[746px] rounded-md '></video>
            <div className=' flex gap-2 '>
                <p className=' text-gray-500 w-[420px]'>
                1. **Messi vs Cruz Azul**: Messi scored his first goal 
                for Inter Miami in the Leagues Cup quarterfinals against
                  Cruz Azul. He received a pass from Gonzalo Higuaín and dribbled
                  past two defenders before slotting the ball into the bottom corner
                  of the net . <br />
                2. **Messi vs LAFC**: In his second MLS game, Messi scored two
                  goals and provided two assists to help Inter Miami beat LAFC
                  4-2. His first goal was a stunning free-kick that curled into 
                  the top corner of the net . <br />
                3. **Messi vs Orlando City**: Messi scored his first MLS goal 
                against Orlando City in August 2023. He received a perfectly weighted
                  pass from Robert Taylor and finished with ease to cap off a great team
                  goal for Inter Miami . <br />
                4. **Messi vs Charlotte FC**: In October 2023, Messi scored a stunning goal
                against Charlotte FC that was unfortunately ruled out for offside ¹. <br />
                5. **Messi vs FC Cincinnati**: In the Leagues Cup semifinals, Messi scored
                two goals to help Inter Miami come from behind and beat FC Cincinnati 3-2 . <br />
                </p>
               {/* images */}
               <div className=' w-[2px] bg-gray-300'></div>
                <div className=' flex flex-col gap-1 '>
                  <img src={messiSix} alt="" className=' rounded-md w-80 h-72  object-cover' />
                  <img src={messiFive} alt="" className=' rounded-md  w-80 h-72 object-cover' />
                </div>
              <div>
            </div>
            </div>
        </div>
        {/* commits */}
        <div className=' flex flex-col gap-2 '>
          <div className=' flex justify-center  gap-2'>
            <h2 className=' text-3xl  font-bold text-amber-950'>Comments:</h2>
            <span className=' text-amber-500 text-3xl font-bold '>4</span>
          </div>
          {/* comments box */}
          <div className=' border-2 rounded-md border-amber-950  p-2 overflow-scroll overflow-x-hidden h-96'>
            {/* first comment */}
            <div className=' flex flex-col gap-1' >
              {/* image and email */}
              <div className=' flex gap-2 '>
                <img src={peopleBruno} alt=" bruno rwanda" className=' h-12 w-12 object-cover rounded-full ' />
                  <div className=' mt-2 flex gap-2 '>
                    <a href='' className=' text-amber-950  font-semibold hover:text-amber-500 duration-300 text-lg'>brunorwanda4@gmail.com</a>
                    <span className=' text-xl text-gray-500 '>...</span>
                  </div>
              </div>
              {/* comment */}
              <div className=' flex flex-col bg-gray-300 w-72 ml-10 p-2  rounded-md shadow-lg hover:shadow-amber-950 duration-300'>
                <p>
                  I Love How He play and he is the one Player in USA 
                </p>
                <div>
                </div>
              </div>
              <div className=' ml-72 flex gap-2'>
                  <button className=' text-xl hover:text-amber-500 text-amber-950 hover:scale-105 duration-300 '>
                    <BsHeart/>
                  </button>
                  <button className=' text-xl hover:text-amber-500 text-amber-950 hover:scale-105 duration-300 '>
                    <FaComment/>
                  </button>
                </div>
            </div>
            {/* second */}
            <div className=' flex flex-col gap-1' >
              {/* image and email */}
              <div className=' flex gap-2 '>
                <img src={messi} alt=" bruno rwanda" className=' h-12 w-12 object-cover rounded-full ' />
                  <div className=' mt-2 flex gap-2 '>
                    <a href='' className=' text-amber-950  font-semibold hover:text-amber-500 duration-300 text-lg'>muganzajesus@gmail.com</a>
                    <span className=' text-xl text-gray-500 '>...</span>
                  </div>
              </div>
              {/* comment */}
              <div className=' flex flex-col bg-gray-300 w-72 ml-10 p-2  rounded-md shadow-lg hover:shadow-amber-950 duration-300'>
                <p>
                  I Love How He play and he is the one Player in USA 
                </p>
                <div>
                </div>
              </div>
              <div className=' ml-72 flex gap-2'>
                  <button className=' text-xl hover:text-amber-500 text-amber-950 hover:scale-105 duration-300 '>
                    <BsHeart/>
                  </button>
                  <button className=' text-xl hover:text-amber-500 text-amber-950 hover:scale-105 duration-300 '>
                    <FaComment/>
                  </button>
                </div>
            </div>
            <div className=' flex flex-col gap-1' >
              {/* image and email */}
              <div className=' flex gap-2 '>
                <img src={peopleBruno} alt=" bruno rwanda" className=' h-12 w-12 object-cover rounded-full ' />
                  <div className=' mt-2 flex gap-2 '>
                    <a href='' className=' text-amber-950  font-semibold hover:text-amber-500 duration-300 text-lg'>muganzajesus@gmail.com</a>
                    <span className=' text-xl text-gray-500 '>...</span>
                  </div>
              </div>
              {/* comment */}
              <div className=' flex flex-col bg-gray-300 w-72 ml-10 p-2  rounded-md shadow-lg hover:shadow-amber-950 duration-300'>
                <p>
                  I Love How He play and he is the one Player in USA 
                </p>
                <div>
                </div>
              </div>
              <div className=' ml-72 flex gap-2'>
                  <button className=' text-xl hover:text-amber-500 text-amber-950 hover:scale-105 duration-300 '>
                    <BsHeart/>
                  </button>
                  <button className=' text-xl hover:text-amber-500 text-amber-950 hover:scale-105 duration-300 '>
                    <FaComment/>
                  </button>
                </div>
            </div>
          </div>
          {/* comments input */}
          <form className='  flex flex-row gap-2 '>
            <textarea className=' border-2 w-96 h-40 text-start rounded-md text-amber-900  placeholder:text-gray-500 px-2 shadow-lg hover:shadow-amber-950 duration-300 active:shadow-amber-950 outline-none' placeholder=' Tell us Want you think' />
            <div className=' flex flex-col gap-2 bg-white shadow-lg  p-2 rounded-md hover:shadow-amber-950 duration-300'>
              <input type="email" className=' border-2 w-80 rounded-md shadow-lg px-2 h-10 outline-none' placeholder=' Your Email '/>
              <div className=' flex flex-col gap-2'>
              <button className=' bg-amber-950 px-4 hover:bg-amber-500 py-1 rounded-md text-white font-bold  duration-300 shadow-lg hover:shadow-amber-500 w-80'>POST</button>
              </div>
              <p> Like or Share</p>
              <div className= " flex gap-2">
                <BsHeart className=" text-2xl hover:text-red-500 duration-300 hover:scale-105 cursor-pointer"/>
                <BsShare className=" text-2xl hover:text-red-500 duration-300 hover:scale-105 cursor-pointer"/>
              </div>
            </div>
          </form>
          {/* email */}
        </div>
      </div>
      {/* adds news */}
      <div className=' flex flex-col gap-2'>
        <div>
          <messiOtherImage/>
        </div>
        <div>
        <HomeDiv1/>
        </div>
        <div className=' relative  mt-[420px] ml-24'>
          <HomeDiv4/>
        </div>
      </div>
     
    </section>
  )
}

export default MessVideoNews
