import React from 'react'
import Navbar from './components/Navbar'
import Topnews from './components/news/topnews'
import Footer from './components/footer'
import Hero  from './components/Hero'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Topnews/>
      <Footer/>
    </div>
  )
}

export default App