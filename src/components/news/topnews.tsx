import React from 'react'
import Image1 from '../../assets/img/png/logo-white.png'
import bbcNews from '../../assets/img/news/pexels-алесь-усцінаў-11477799.jpg'
const topnews = () => {
  return ( 
    //the top News
    <div className='p-20 flex gap-16'>
        {/* part1 */}
        <div className='mt-10 border-r pr-9'>
            <a href="#">
            <img src={Image1} alt="img1" className='h-52 w-80 ' />
            </a>
            <div className='mt-7'>
      <small>CULTURE • JUL 5TH '22</small>
      </div>
      <div className='mt-7 text-3xl font-serif'>
      <a href="#">
        <h1>
        11 Work From <br />
         Home Part-Time <br />
          Jobs You Can Do <br />
           Now
        </h1>
      </a>
      </div>
      <div className='mt-7'>
         
        Lorem ipsum dolor sit, amet consectetur <br />
         adipisicing elit. Vero temporibus repudiandae <br />
         inventore pariatur numquam cumque possimus <br />
          exercitationem? Nihil tempore odit ab minus <br />
           eveniet praesentium, similique blanditiis <br />
            molestiae ut saepe perspiciatis officia nemo, <br />
             eos quae cumque. Accusamus fugiat architecto <br />
              rerum animi atque eveniet, quo, praesentium <br />
              dignissimos
        
      </div>
      <div className='mt-5 flex gap-4'>
        <img src={Image1} alt="" className='h-7 w-7 rounded-full' />
        <p>Cameron Williamson</p>
      </div>
      </div>
      {/* part2 */}
      <div className=' border-r pr-5 '>
        {/* 1 */}
        <a href="#">
      <img src={Image1} alt="img2" className='w-52 h-40 mt-7' />
      </a>
      <div className='mt-5'>
      <small>SPORT • JUL 5TH '22</small>
      </div>
      <div className='mt-5 text-10 font-serif'>
      <a href="#">
        <h1>
        Let’s Get Back to Work, <br />
         New York
        </h1>
      </a>
      </div>
      {/* 2 */}
      <a href="#">
      <img src={bbcNews} alt="img3"  className='w-52 h-40 mt-7'/>
      </a>
      <div className='mt-5'>
      <small>FOOD • JUL 17TH '22</small>
      </div>
      <div className='mt-5 text-10 font-serif'>
      <a href="#">
        <h1>
        Israel says it will increase Gaza strikes,<br/> 
        telling more people to flee south

        </h1>
      </a>
      </div>
      {/* 3 */}
      <a href="">
      <img src={bbcNews} alt="img4" className='w-52 h-40 mt-7'/>
      </a>
      <div className='mt-5'>
      <small>DESIGN • MAR 15TH '22</small>
      </div>
      <div className='mt-5 text-10 font-serif'>
      <a href="#">
        <h1>
        Why Craigslist Tampa Is <br />
         One of The Most <br />
          Interesting Places On the <br />
           Web?
        </h1>
      </a>
      </div>
      </div>
      {/* part3 */}
      <div >
        {/* 1 */}
        <a href="#">
      <img src={Image1} alt="img5" className='w-52 h-40 mt-7'/>
      </a>
      <div className='mt-5'>
      <small>BUSINESS • JUL 5TH '22</small>
      </div>
      <div className='mt-5 text-10 font-serif'>
      <a href="#">
        <h1>
        6 Easy Steps To Create <br />
         Your Own Cute Merch <br />
         For Instagram
        </h1>
      </a>
      </div>
      {/* 2 */}
      <a href="#">
      <img src={bbcNews} alt="img6" className='w-52 h-40 mt-7'/>
      </a>
      <div className='mt-5'>
      <small>TECH • MAR 1ST '22</small>
      </div>
      <div className='mt-5 text-10 font-serif'>
      <a href="#">
        <h1>
        10 Life-Changing Hacks <br />
         Every Working Mom <br />
          Should Know
        </h1>
      </a>
      </div>
      {/* 3 */}
      <a href="#">
      <img src={bbcNews} alt="img7" className='w-52 h-40 mt-7'/>
      </a>
      <div className='mt-5'>
      <small>TRAVEL • JUL 5TH '22</small>
      </div>
      <div className='mt-5 text-10 font-serif'>
      <a href="#">
        <h1>
        5 Great Startup Tips for <br />
         Female Founders
        </h1>
      </a>
      </div>
      </div>
      <div className=' border'>
      <div className=' p-10 border-b text-3xl font-serif'>
        Trending
      </div>
      <div className=' p-10 border-b text-4'>
      The Best Homemade <br />
       Masks for Face (keep <br />
        the Pimples Away)
Jane Cooper
</div>
<div className=' p-10 border-b text-4'>
17 Pictures of Medium <br />
 Length Hair in Layers <br />
  That Will Inspire Your <br />
   New Haircut
Wade Warren
</div>
<div className=' p-10 border-b text-4'>
13 Amazing Poems <br />
 from Shel Silverstein <br />
  with Valuable Life <br />
   Lessons
Esther Howard
</div>
<div className=' p-10 border-b text-4'>
9 Half-up/half-down  <br />
Hairstyles for Long <br />
 and Medium Hair <br />
Cameron Williamson
</div>
<div className=' p-10 border-b text-4'>
Life Insurance And <br />
 Pregnancy: A Working <br />
  Mom’s Guide <br />
Jenny Wilson
</div>
      </div>
    </div>
  )
}


export default topnews