import React from 'react'

function Hero() {
     var images=[
{url:"https://images.unsplash.com/photo-1767304590980-9c075c875c38?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",top:"45%",left:"30%",isActive:false},
{url:"https://images.unsplash.com/photo-1767290645350-dcb4e6bf9d04?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D",top:"60%",left:"27%",isActive:false},
{url:"https://images.unsplash.com/photo-1761839258753-85d8eecbbc29?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0M3x8fGVufDB8fHx8fA%3D%3D",top:"50%",left:"33%",isActive:false},
{url:"https://images.unsplash.com/photo-1766859813732-20a127bb6023?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0N3x8fGVufDB8fHx8fA%3D%3D",top:"70%",left:"25%",isActive:false},


    ]
  return (
    <div>
        <div className='max-w-screen-xl  mx-auto text-center relative'>
<h1 className=' font-medium  bg-zinc-900  text-white text-[25vw] '>
      Work
    </h1>
<div className='w-full h-full top-0 absolute '>
{images.map((elem,index)=>(elem.isActive &&(<img  className='w-80 absolute rounded-xl translate-x-[50%] -translate-y-[50%]' src={elem.url} style={{top:elem.top ,left:elem.left}}></img>)))}
</div>
        </div>
    </div>
    
  )
}

export default Hero
