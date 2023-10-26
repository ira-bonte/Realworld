import React, { useRef, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import IgiheSirider from './Hero/IgiheSirider';
import BbcNews from './Hero/BbcNews';
import Trending from './Hero/Trending';
import Videos from './Hero/Videos';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Popular from './Hero/Popular';

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

  // trending news slide
  const [change, setChange] = useState('Popular');
  
  return (
    <section className="relative pt-20 px-2 flex">
      <div className="h-[450px] w-[990px]">
        <Slider ref={sliderRef} {...settings}>
          <div>
            <BbcNews />
          </div>
          <div>
            <IgiheSirider />
          </div>
        </Slider>
        <div className="flex w-[990px] justify-between absolute z-40 px-2 -mt-64">
          <button className="text-2xl text-white bg-amber-950 h-8 w-8 text-center rounded-full cursor-pointer hover:scale-110 duration-300 hover:bg-amber-500" onClick={goToPrevSlide}>
            <FaChevronLeft />
          </button>
          <button className="text-2xl text-white bg-amber-950 h-8 w-8 text-center rounded-full cursor-pointer hover:scale-110 duration-300 hover:bg-amber-500" onClick={goToNextSlide}>
            <FaChevronRight />
          </button>
        </div>
      </div>
      {/* other news */}
      <div className="px-2 max-lg:hidden">
        {/* categories of Popular*/}
        <div className="flex gap-4">
          {/* popular */}
          <button
            className={`font-medium text-base hover:text-amber-500 duration-300 hover:border-b-2 ${change === 'Popular' ? 'border-amber-600' : ''}`}
            onClick={() => setChange('Popular')}
          >
            Popular
          </button>
          {/* trending */}
          <button
            className={`font-medium text-base hover:text-amber-500 duration-300 hover:border-b-2 ${change === 'Trending' ? 'border-amber-600' : ''}`}
            onClick={() => setChange('Trending')}
          >
            Trending
          </button>
          <button
            className={`font-medium text-base hover:text-amber-500 duration-300 hover:border-b-2 ${change === 'Videos' ? 'border-amber-600' : ''} text-2xl`}
            onClick={() => setChange('Videos')}
          >
            Videos
          </button>
        </div>
        {/* where it is shown */}
        {change === 'Popular' && <Popular />}
        {change === 'Trending' && <Trending />}
        {change === 'Videos' && <Videos />}
      </div>
    </section>
  );
};

export default Hero;
