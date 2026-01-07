import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
function Card({width,start,para,hover}) {
  return (
    <div className={`w-1/2 bg-zinc-800 p-5 rounded-xl hover:${hover} ${width} min-h-[60vh] flex flex-col justify-between`}>
        <div className='w-full'>
        <div className='w-full flex justify-between items-center'>
            <h3>One Headline</h3>
            <FaArrowRight className='mr-5' />
        </div>
        
            <h1 className='text-3xl font-semibold mt-10'>Heading</h1>
        </div>
        <div className=' '>
            {start===true &&(
                <>
                 <h1 className='text-6xl font-semibold tracking-tight leading-none'>Start A Project</h1>
            <button className='rounded-full border-1 border-zinc-100 py-2 px-4 mt-6'>Contact Us</button>
                </>
            )}
           
        </div>
        {
            para===true?(
        <p className='text-sm mt-30 text-zinc-500'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>

            ):null
        }
    </div>
  )
}

export default Card
