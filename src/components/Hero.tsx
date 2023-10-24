import React, { useRef } from 'react'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import IgiheSirider from './Hero/IgiheSirider'
import BbcNews from './Hero/BbcNews'
// icons
import { BsArrowDownRight } from "react-icons/bs"
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
// start
const Hero = () => {
    const sliderRef = useRef(null);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false, // Disable default arrows
        autoplay: true, // Enable autoplay
        autoplaySpeed: 9000,
      };
       // Go to the previous slide
       const goToPrevSlide = () => {
        sliderRef.current.slickPrev();
      };
    
      // Go to the next slide
      const goToNextSlide = () => {
        sliderRef.current.slickNext();
      };
  return (
    <div className= " relative pt-20 px-2">
      <Slider ref={sliderRef} {...settings}>
        <div>
          <BbcNews/>
        </div>
        <div>
          <IgiheSirider/>
        </div>
      </Slider>
      {/* button of slider */}
      <div className=' flex w-[990px] justify-between absolute z-40 px-2 -mt-64'>
      <button className=' text-2xl text-white bg-amber-950 h-8 w-8 text-center rounded-full cursor-pointer hover:scale-110 duration-300  hover:bg-amber-500' onClick={goToPrevSlide}>
          <FaChevronLeft/>
        </button>
        <button className=' text-2xl text-white bg-amber-950 h-8 w-8 text-center rounded-full cursor-pointer hover:scale-110 duration-300  hover:bg-amber-500' onClick={goToNextSlide}>
          <FaChevronRight/>
        </button>
      </div>
    </div>
  )
}

export default Hero
