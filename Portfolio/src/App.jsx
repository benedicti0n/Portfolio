import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'

function App() {

  return (
    <>
    <div id='main' className='w-screen h-screen bg-[#FEECE2] flex justify-center items-center flex-col'>
      <Header/>

      <Home/>

      <Footer/>
    </div>
    </>
  )
}

export default App
