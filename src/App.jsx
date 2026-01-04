import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stripes from './components/Stripes'
import Products from './components/Products'
function App() {
  return (
    <div className='bg-zinc-900 text-white w-full '>
   <Navbar/>
   <Hero/>
   <Stripes/>
   <Products/>
    </div>
  )
}

export default App
