import React from 'react'
import bbcNewOne from '../../assets/img/news/bbcNews-1.jpg'

const BbcNews = () => {
  const className = {
    imgContainer: "h-[8hv] w-[12hv] relative",
    img: "h-full w-full object-cover cursor-pointer rounded-md",
    
  }

  return (
    <div>
      {/* background image */}
      <a href="./">
        <img src={bbcNewOne} alt="" className={className.img} />
      </a>
    </div>
  )
}

export default BbcNews
