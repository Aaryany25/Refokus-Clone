import React from 'react'

function Marquee({imgurl}) {
  return (
    <div className='flex w-full overflow-x-hidden py-5  gap-4 bg-white'>
      {imgurl.map(url=><img src={url} className=' px-4 w-[150px]' />)}
      
    </div>
  )
}

export default Marquee

