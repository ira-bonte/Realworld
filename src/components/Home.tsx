<<<<<<< HEAD
import React from 'react'
import { useEffect } from 'react'
=======

import React from 'react'
import React, { useEffect } from 'react'
>>>>>>> 25eb1af346ba91df4e273e7ba6a71ba57f8d08bd
import Hero from './Hero'
import HomeDiv2 from './home/HomeDiv2'
import HomeDiv3 from './home/HomeDiv3'
import HomeDiv1 from './home/HomeDiv1'
<<<<<<< HEAD
import HomeDiv4 from './home/HomeDiv4'

=======
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
>>>>>>> 25eb1af346ba91df4e273e7ba6a71ba57f8d08bd
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
        <div>
          <HomeDiv4/>
        </div>
      </div>
<<<<<<< HEAD
=======
      {/* <Topnews/>  */}
>>>>>>> 25eb1af346ba91df4e273e7ba6a71ba57f8d08bd
    </section>
  )
}

export default Home
