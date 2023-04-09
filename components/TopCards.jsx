import React from 'react'

const TopCards = () => {
  return (
    <div className='grid lg:grid-cols gap-4 p-4'>
      <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
        <div className='flex flex-col w-full pb-4'>
          <p className='text-2xl font-bold'>$7,846</p>
          <p className='text-gray-600'>Daily Revene</p>
        </div>
        <p className='  bg-cyan-300 text-gray-200 flex justify-center items-center p-2 rounded-lg'>
          <span className='text-green-700 text-lg'> +14% </span>
        </p>
  </div>
  <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
        <div className='flex flex-col w-full pb-4'>
          <p className='text-2xl font-bold'>$1,437,876</p>
          <p className='text-gray-600'>yearly Revene</p>
        </div>
        <p className=' bg-cyan-300 text-gray-200 flex justify-center items-center p-2 rounded-lg'>
          <span className='text-green-700 text-lg'> +12% </span>
        </p>
  </div>
  <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
        <div className='flex flex-col w-full pb-4'>
          <p className='text-2xl font-bold'>17,876</p>
          <p className='text-gray-600'>No. of people</p>
        </div>
        <p className=' bg-cyan-300 text-gray-200 flex justify-center items-center p-2 rounded-lg'>
          <span className='text-green-700 text-lg'> +17% </span>
        </p>
  </div>
    </div>
  )
}

export default TopCards