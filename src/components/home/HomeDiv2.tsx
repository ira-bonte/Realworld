import React from 'react'
//import Igihe2 from '../../assets/img/news/pexels-алесь-усцінаў-11518767.jpg'
import Igihe1 from '../../assets/img/news/pexels-алесь-усцінаў-11477799.jpg'
import bbcNews from '../../assets/img/news/bbcNews-1.jpg'
import Iphone81 from '../../news/iphone81.png'
const HomeDiv2 = () => {
  return (
   <div>
    {/* 1st img */}
    <div className=' mt-4'>
        <div>
        <img src={Iphone81} alt="iphone" className=' h-52 w-56' />
        </div>
        <div className=' mt-3'>
            <small>SPORT • JUL 5TH '22</small>
        </div>
        <div className=' mt-5 text-10 font-serif'>
        Earthquake Shakes Neighborhood, <br />
Causes Structural Damage
        </div>
    </div>
    {/* 2nd img */}
    <div className=' mt-4'>
        <div>
        <img src={Igihe1} alt="img2" className=' h-52 w-56' />
        </div>
        <div className=' mt-3'>
            <small>FOOD • JUL 17TH '22</small>
        </div>
        <div className=' mt-5 text-10 font-serif'>
        Israel says it will increase Gaza strikes, <br />
telling more people to flee south
        </div>
    </div>
    {/* 3rd img */}
    <div className=' mt-4'>
        <div>
        <img src={bbcNews} alt="img2" className=' h-52 w-56' />
        </div>
        <div className=' mt-3.5'>
            <small>DESIGN • MAR 15TH '22</small>
        </div>
        <div className=' mt-5 text-10 font-serif'>
        Why Craigslist Tampa Is <br />
One of The Most <br />
Interesting Places On the <br />
Web?
        </div>
    </div>
   </div>
  )
}

export default HomeDiv2
