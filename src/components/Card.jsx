import React from 'react'

const Card = ({src,type}) => {
  return (
    <div className='w-full h-[340px] p-5 bg-white rounded-xl '>
        <div className='w-full h-4/5 relative'>

        <img src={src} alt="" className=' w-full h-full object-cover rounded-xl' />
        <div className='absolute top-2 right-2 px-5 py-2 bg-gray-300/50 rounded-md'>
            <p className='text-white font-bold'>{type}</p>
        </div>
        </div>
        
        <div className='text-center py-2'>
            <h1 className='text-xl font-semibold'>Lorem, ipsum dolor.</h1>
            <button>Download</button>
        </div>
    </div>
  )
}

export default Card