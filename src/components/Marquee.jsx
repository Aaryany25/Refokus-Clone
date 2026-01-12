import { motion } from 'motion/react'
import React from 'react'

function Marquee({imgurl}) {
  return (
    <div className='flex w-full overflow-hidden'>
 <motion.div className='flex w-full overflow-x-hidden py-5  gap-4 bg-white'>
      {imgurl.map(url=><img src={url} className=' px-4 w-[150px]' />)}
      
    </motion.div>
     <div className='flex w-full overflow-x-hidden py-5  gap-4 bg-white'>
      {imgurl.map(url=><img src={url} className=' px-4 w-[150px]' />)}
      
    </div>
    </div>
   
  )
}

export default Marquee

