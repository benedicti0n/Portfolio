import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
    <div className='w-screen h-screen flex justify-center items-center bg-[#FEECE2]'>
      <div className='w-[80%] h-screen flex justify-center items-center flex-col'>
        <Header/>

        <Home/>

        <Footer/>
      </div>
      <div className='w-[10%]'>
        <Navbar/>
      </div>
    </div>

    </>
  )
}

export default App
