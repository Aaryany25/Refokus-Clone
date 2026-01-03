import React from 'react'
import { MdArrowOutward } from "react-icons/md";
function Button({content}) {
  return (
    <div className='w-35 px-3 py-2 bg-zinc-100 text-black rounded-full text-center flex items-center justify-around'>
      <span className='font-medium'>Get Started</span>
      <MdArrowOutward />
    </div>
  )
}

export default Button
