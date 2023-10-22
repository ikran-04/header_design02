import React from 'react'

const Navbar = () => {
  return (
    <div className='py-5 flex justify-between items-center'>
        <div className='flex items-center space-x-8'>
            <img src="/logo.png" alt="" className='w-8 h-8 object-cover' />
            <ul className='hidden md:flex space-x-8 items-center'>
                <li>Vectors</li>
                <li>Photos</li>
                <li>PSD</li>
                <li>Video</li>
                <li>More</li>
            </ul>
        </div>
        <div className='flex items-center space-x-5'>
            <button className='px-5 py-2 rounded-md border'>Contact</button>
            <button className='p-2 rounded-full bg-white shadow-xl'>
                <img src="/google.png" alt="" className='w-4 h-4' />
            </button>
            
            <button className='p-2 rounded-full bg-white shadow-xl'>
                <img src="/facebook.png" alt="" className='w-4 h-4' />
            </button>
        </div>
    </div>
  )
}

export default Navbar