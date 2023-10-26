import React from 'react'
import Navbar from './components/Navbar'
import Topnews from './components/news/topnews'
import Footer from './components/footer'
import Header from './components/Header';
import Hero from './components/Hero';
import NavRouters from './components/NavRouters'

const App = () => {
  return (
    <section className=' bg-gray-100'>
      <Navbar/>
      <Hero/>
      <Topnews/>
      <Footer/>
      <Header/>
      <NavRouters/>
      </section>
  )
}

export default App
