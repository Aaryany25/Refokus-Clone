import React from 'react'

function Stripe({val}) {
  return (
    <div className='min-w-[16.67%] py-3  border-3 border-l-0 border-zinc-800 flex justify-around items-center'>
      {/* <img src={val.url} alt="" className='w-20'/> */}
      <span className='font-semibold'>{val.number}</span>
    </div>
  )
}

export default Stripe
