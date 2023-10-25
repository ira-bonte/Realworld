import React from 'react'
import Hero from './Hero'
import Topnews from './news/topnews'
import HomeDiv2 from './home/HomeDiv2'
import HomeDiv3 from './home/HomeDiv3'
import HomeDiv1 from './home/HomeDiv1'
const Home = () => {
  return (
    <section className=' flex flex-col gap-2'>
      <Hero/>
      <div className=' px-2'>
        <HomeDiv1/>
      </div>
      <Topnews/> 
      {/* <HomeDiv2/> */}
      {/* <HomeDiv3/> */}
    </section>
  )
}

export default Home
