import React from 'react'
import Navbar from './components/Navbar'
import Topnews from './components/news/topnews'
import Footer from './components/footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Topnews/>
      <Footer/>
    </div>
  )
}

export default App