import React from 'react'

const Footer = () => {
  return (
<div className='py-20  flex flex-col md:flex-row md:justify-between items-center space-y-5 md:space-y-0'>
        <div className='flex md:space-x-5 items-center'>

        <p className='underline  font-semibold'>Discover <br/> All Collections</p>
        <div className='relative flex px-5'>
            <img src="/image1.svg" alt="" className='w-12 h-12 relative border-2 border-white ' />
            <img src="/image3.svg" alt="" className='w-12 h-12 absolute ml-8 border-2 border-white' />
            <img src="/image1.svg" alt="" className='w-12 h-12 absolute ml-12 border-2 border-white' />
            <img src="/image2.svg" alt="" className='w-12 h-12 absolute ml-16 border-2 border-white' />
        </div>
        </div>
        <div>
            <button className='px-5 py-2 bg-white flex items-center space-x-2'><span>Next Page</span> <img src="/arrow.png" alt="" className='w-8'/></button>
        </div>

        <div className='hidden md:flex items-center space-x-2'>
            <p className='text-gray-400'>Page</p>
            <button className='bg-white rounded- p-1'>
                <img src="/left.png" alt="" className='w-4 h-4'/>
            </button>
            <input type="number" className='w-8 outline-0 text-center'defaultValue={1} />
            
            <button className='bg-white rounded-md p-1'>
                <img src="/right.png" alt="" className='w-4 h-4'/>
            </button>
            
            <p className='text-gray-400'>of 120 page</p>
        </div>
    </div>
    
  )
}

export default Footer