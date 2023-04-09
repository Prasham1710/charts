import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between px-4 pt-4' >
        <h2>Dashboard</h2>
        <h2>Welcome Back, <button className='bg-blue-200 p-1 rounded-lg'>Prasham</button></h2>
    </div>
  )
}

export default Header