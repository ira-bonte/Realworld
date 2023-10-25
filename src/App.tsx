import React from 'react'
import Navbar from './components/Navbar'
import Topnews from './components/news/topnews'
import Footer from './components/footer'
import Header from './components/Header';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Topnews/>
      <Footer/>
      <Header/>
    </div>
  )
}

export default App