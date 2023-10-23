import React, { useRef } from 'react'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import BbcNews from './Hero/BbcNews'
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
        <BbcNews/>
      </Slider>
    </div>
  )
}

export default Hero
