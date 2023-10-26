
import React from 'react'
import React, { useEffect } from 'react'
import Hero from './Hero'
import Topnews from './news/topnews'
import HomeDiv2 from './home/HomeDiv2'
import HomeDiv3 from './home/HomeDiv3'
import HomeDiv1 from './home/HomeDiv1'
import Mixture from './sports/Mixture'
const Home = () => {
  return (
    <section className=' flex flex-col gap-2'>
      <Hero/>
      <div className=' px-2'>
        <HomeDiv1/>
      </div>
      <Topnews/> 
      <Mixture/>
      {/* <HomeDiv2/> */}
      {/* <HomeDiv3/> */}
const Home = () => {
  useEffect(() => {
    document.title ="Real World"
  })
  return (
    <section className=' flex flex-col gap-2'>
      <Hero/>
      <div className=' flex gap-1 mt-4'>
        <div className=' max-lg:hidden'>
          <HomeDiv1/>
        </div>
        <div>
          <HomeDiv2/>
        </div>
        <div>
          <HomeDiv3/>
        </div>
      </div>
      {/* <Topnews/>  */}
    </section>
  )
}

export default Home
