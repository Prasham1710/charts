import React from 'react'
import {data} from '../data/data.js'
import {FaShoppingBag} from 'react-icons/fa'
const RecentOrder = () => {
  return (
    <div className='w-full col-span-1 relative lg:h-[70vh] h-[50h] m-auto p-4 boder rounded-lg bg-white overflow-scroll '>
        <h1>Recent Orders</h1>
        <ul>
            {data.map((order, id) => (
                <li key={id} className='bg-gray-50 hover:bg-gray-200 rounded-lg my-3 p-2 flex items-center cursor-pointer '>
                    <div className='bg-bluw-200 rounded-lg p-2'>
                        <FaShoppingBag size={20} className= 'text-fuchsia-600' />
                    </div>
                    <div className='pl-4'>
              <p className='text-gray-800 font-bold'>${order.total}</p>
              <p className='text-gray-400 text-sm'>{order.name.first}</p>
            </div>
             <p className='lg:flex md:hidden absolute right-6 text-sm'>{order.date}</p>
                </li>
            ))} 
        </ul>
    </div>
  )
}

export default RecentOrder