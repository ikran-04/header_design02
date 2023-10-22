import React from 'react'

const Search = () => {
  return (
    <div className='flex items-center justify-between space-x- py-3 px-5 bg-white rounded-md'>
        <div className='flex space-x-5'>

        <select name="" id="" className='border p-1 rounded-md'>
            <option value="">Videos</option>
        </select>
        <input type="text" name="" id="" placeholder='Search Plant' className='outline-0'/>
        </div>
        <img src="/search.png" alt="" className='w-4 h-4'/>

    </div>
  )
}

export default Search