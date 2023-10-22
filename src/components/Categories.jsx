import React from 'react'

const Categories = () => {
  return (
    <div className='flex justify-between items-center py-5'>
        <div>
            <ul className='flex space-x-2 md:space-x-5 text-sm md:text-base font-bold'>

                <li>Latest</li>
                <li>Popular</li>
                <span>|</span>
                <li className='text-orange-500'>Premium</li>
                <li className='text-blue-500'>Free</li>
            </ul>
        </div>
        <div className='flex items-center space-x-5'>
            <img src="/filter.png" alt="" className='w-8 h-8' />             
            <img src="/save.png" alt="" className='w-8 h-8' />            
        </div>
    </div>
  )
}

export default Categories