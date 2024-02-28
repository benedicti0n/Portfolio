import { useState } from 'react'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div id='main' className=' w-screen h-screen bg-[#FEECE2] flex justify-center items-center"'>
      <Header/>
    </div>
    </>
  )
}

export default App
