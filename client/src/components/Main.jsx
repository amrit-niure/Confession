import React, { useState } from 'react'

import { NavLink, Link, Outlet } from 'react-router-dom'
import SideMenu from './SideMenu'
import { useSelector } from 'react-redux'
import SideBar from './SideBar'
import RightBar from './RightBar'
import CreatePost from './CreatePost'
import UpdatePost from './UpdatePost'
import Header from './Header'
const Main = () => {


  const { isOpen } = useSelector((store) => store.modal)
  const { openPost } = useSelector((store) => store.postModal)
  const { openUpdate } = useSelector((store) => store.update)

  const activeStyle = 'font-bold'
  return (
    <div>
      <div className='px-[2.5rem]   md:px-[5rem] lg:[10rem] xl:px-[20rem] sticky top-0 left-0  bg-white z-10  '>
      <Header />
      </div>
      {isOpen && <SideMenu />}
      <div className='w-[100vw] md:px-[100px] flex justify-center bg-lightWhite overflow-x-hidden'>
        <div className=' w-[1280px] flex gap-[40px] justify-center  relative'>
        <div className="hidden md:flex justify-left w-[300px] h-[92vh] sticky top-0 left-0 pt-[3rem] ">
          <SideBar />
        </div>
        {/*  w-[400px] md:w-[500px]*/}
        <div className="flex align-center w-[400px] md:w-[500px] ">
          <Outlet  />
        </div>
        <div className="hidden xl:flex justify-end items-start w-[400px] h-[92vh] pt-[3rem] ">
          <RightBar />
        </div>
      </div>
      </div>
      {openPost && <CreatePost />}
      {openUpdate && <UpdatePost  />}

    </div>
  )
}

export default Main
