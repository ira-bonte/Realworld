import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Import the missing components or define them
import IgiheSirider from './Hero/IgiheSirider';
import BbcNews from './Hero/BbcNews';
import Trending from './Hero/Trending';
import Videos from './Hero/Videos';
import Popular from './Hero/Popular';

const Hero = () => {
  const sliderRef = useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 9000,
  };

  const goToPrevSlide = () => {
    sliderRef.current.slickPrev();
  };

  const goToNextSlide = () => {
    sliderRef.current.slickNext();
  };

  const [change, setChange] = useState(<Popular />);

  const toggleChange = (newChange: string) => {
    switch (newChange) {
      case 'Popular':
        setChange(<Popular />);
        break;
      case 'Trending':
        setChange(<Trending />);
        break;
      case 'Videos':
        setChange(<Videos />);
        break;
      default:
        setChange(<Popular />);
        break;
    }
  };

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
          <div>
            {/* You may replace this with your 'MessVideo' component */}
            <div>MessVideo Component</div>
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
      <div className="px-2 max-lg:hidden">
        <div className="flex gap-4">
          <button
            className="font-medium text-base hover:text-amber-500 duration-300 hover:border-b-2 border-amber-600"
            onClick={() => toggleChange('Popular')}
          >
            Popular
          </button>
          <button
            className="font-medium text-base hover:text-amber-500 duration-300 hover:border-b-2 border-amber-600"
            onClick={() => toggleChange('Trending')}
          >
            Trending
          </button>
          <button
            className="font-medium text-base hover:text-amber-500 duration-300 hover:border-b-2 border-amber-600 text-2xl"
            onClick={() => toggleChange('Videos')}
          >
            Videos
          </button>
        </div>
        <div className="pt-2">{change}</div>
      </div>
    </section>
  );
};

export default Hero;
