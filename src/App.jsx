import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stripes from './components/Stripes'

function App() {
  return (
    <div className='bg-zinc-900 text-white w-full h-screen'>
   <Navbar/>
   <Hero/>
   <Stripes/>
    </div>
  )
}

export default App
