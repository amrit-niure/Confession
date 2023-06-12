import React from 'react'
import logo from '../assets/logo_confession.png'
import { Outlet } from 'react-router-dom'

const FirstHeader = () => {
  return (
    <div className='flex flex-col w-full h-full'>
    <header className='flex w-full h-[8vh] px-[2.5rem] md:px-[5rem] lg:px-[10rem] py-[1.5rem] justify-center items-center'>
    <img src={logo} alt="" className='h-[25px] w-[100px] md:h-[35px] md:w-[150px]' />
</header>
<Outlet />
</div>
  )
}

export default FirstHeader
