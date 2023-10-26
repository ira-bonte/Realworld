import React from 'react'
import addOne from '../../assets/video/adds/adds-1.mp4'
const HomeDiv1 = () => {
  const className= {
    video: " w-[400px] h-[280px] object-cover rounded-md",
  };
  return (
    <div>
        {/* adds */}
        <a href='./'>
            <video controls width="" className={className.video}>
                <source src={addOne} type='video/mp4'/>
            </video>
            <span>Kenny K-Shot, Nikita Heaven - Lowkey Lyrics Visuals</span>
        </a>
    </div>
  )
}

export default HomeDiv1