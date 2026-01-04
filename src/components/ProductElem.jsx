import React from 'react'
import Button from './Button'

function ProductElem({val}) {
  return (
    <div className='w-full py-20 text-white'>
     <div className='max-w-screen-xl mx-auto flex items-center justify-between pb-10 border-b-2 border-zinc-700'>
       <h1 className='text-5xl font-semibold capitalize'>{val.name}</h1>
       <img src={val.url} alt="" className='w-[300px]' />
       <div className='w-1/3'>
        <p className=' mb-20'>{val.desc}</p>
        <Button content="Learn More"/>
       </div>
     </div>
    </div>
  )
}

export default ProductElem
