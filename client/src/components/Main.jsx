import React, { useState } from 'react'

import { NavLink, Link, Outlet } from 'react-router-dom'
import SideMenu from './SideMenu'
import { useSelector } from 'react-redux'
import { toggleOpenPost } from '../state/postSlice'
import SideBar from './SideBar'
import RightBar from './RightBar'
import CreatePost from './CreatePost'
import Header from './Header'
const Main = () => {


  const { isOpen } = useSelector((store) => store.modal)
  const { openPost } = useSelector((store) => store.postModal)


  const activeStyle = 'font-bold'
  return (
    <div>
      <Header />
      {isOpen && <SideMenu />}
      <div className='flex justify-center h-[92vh]  bg-lightWhite md:px-4 overflow-x-auto gap-4'>
        <div className="hidden md:flex justify-center lg:w-[400px] h-[92vh] flex-grow sticky top-0 left-0">
          <SideBar />
        </div>

        <div className="flex align-center w-[400px] md:w-[500px]">
          <Outlet />
        </div>
        <div className="hidden lg:flex justify-center w-[500px] pt-[3rem] h-[100vh]">
          <RightBar />
        </div>
      </div>






      {openPost && <CreatePost />}
    </div>
  )
}

export default Main
