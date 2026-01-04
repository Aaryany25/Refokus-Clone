import React from 'react'
import Stripe from './Stripe'

function Stripes() {
    const data =[
        {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b597d53302df1b88f5_660191f0bd52de169c0dbc94_Logo-black.svg",number:48},
        {url:"https://imgs.search.brave.com/VCJQqop8qk3V827TasgqU3uJvEuSLk95jAtpqTwzF78/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvZC53ZWJzaXRl/LWZpbGVzLmNvbS82/NDFkYmNlZjQ3N2Y3/MzQ4MGU3MjNhYTUv/NjhhOTlmOTA1ZGQ1/ZDRhYjVmNGFkNGU5/X0xvZ29fQ1NTX0Rl/c2lnbl9Bd2FyZHMu/cG5n",number:2},
        {url:"https://imgs.search.brave.com/mjhAll9vjeWnYY2cXWjRlRS2IJlanNo5xsmoI9hJgU8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb2dv/ZXBzLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAxNC8wNS8y/ODI3OS1hd3d3YXJk/cy13ZWJzaXRlLWxv/Z28taWNvbi12ZWN0/b3ItaWNvbi12ZWN0/b3ItZXBzLnBuZw",number:11},
        {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b597d53302df1b88f5_660191f0bd52de169c0dbc94_Logo-black.svg",number:48},
        {url:"https://imgs.search.brave.com/VCJQqop8qk3V827TasgqU3uJvEuSLk95jAtpqTwzF78/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvZC53ZWJzaXRl/LWZpbGVzLmNvbS82/NDFkYmNlZjQ3N2Y3/MzQ4MGU3MjNhYTUv/NjhhOTlmOTA1ZGQ1/ZDRhYjVmNGFkNGU5/X0xvZ29fQ1NTX0Rl/c2lnbl9Bd2FyZHMu/cG5n",number:2},
        {url:"https://imgs.search.brave.com/mjhAll9vjeWnYY2cXWjRlRS2IJlanNo5xsmoI9hJgU8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb2dv/ZXBzLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAxNC8wNS8y/ODI3OS1hd3d3YXJk/cy13ZWJzaXRlLWxv/Z28taWNvbi12ZWN0/b3ItaWNvbi12ZWN0/b3ItZXBzLnBuZw",number:11},
    ]
  return (
    <div className='flex  '>
        {
            data.map((elem,index)=>{
             return   <Stripe val={elem}/>

            })
        }
    </div>
  )
}

export default Stripes
