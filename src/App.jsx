import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stripes from './components/Stripes'
import Products from './components/Products'
import Marquees from './components/Marquees'
function App() {
  return (
    <div className='bg-zinc-900 text-white w-full '>
   <Navbar/>
   <Hero/>
   <Stripes/>
   <Products/>
   <Marquees/>
    </div>
  )
}

export default App
