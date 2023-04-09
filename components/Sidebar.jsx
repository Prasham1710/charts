import Link from 'next/link';
import React from 'react';
import {RxDashboard, RxPerson, RxSketchLogo} from 'react-icons/rx'
import {HiOutlineShoppingBag} from 'react-icons/hi'
import {FiSettings} from 'react-icons/fi'
const Sidebar = ({children}) => {
  return (
    <div className='flex'>
        <div className='fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between'>
            <div className='flex flex-col items-center'>
            <Link href='/'>
                <div className='bg-blue-800 text-white p-2 rounded-lg inline-block'>
                    <RxSketchLogo size={22} />
                </div>
            </Link>
            <span className='border-b-[1px] border-gray-200 w-full p-2'></span>
            <Link href='/'>
                <div title='Dashboard' className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-2 p-3 rounded-lg inline-block'>
                    <RxDashboard size={22} />
                </div>
            </Link>
            <Link href='/customers'>
                <div title='customer' className='bg-gray-100 hover:bg-gray-200  cursor-pointer my-2 p-3 rounded-lg inline-block'>
                    <RxPerson  size={22} >Customer</RxPerson>
                </div>
            </Link>
            <Link href='/orders'>
                <div title='orders' className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-2 p-3 rounded-lg inline-block'>
                    <HiOutlineShoppingBag size={22} />
                </div>
            </Link>
            <Link href='/'>
                <div title='settings' className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-2 p-3 rounded-lg inline-block'>
                    <FiSettings size={22} />
                </div>
            </Link>
            </div>
        </div>
        
        <main className='ml-20 w-full'>{children}</main>
    </div>
  )
}

export default Sidebar