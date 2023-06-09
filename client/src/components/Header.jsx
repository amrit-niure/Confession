import React, { useState } from 'react'
import logo from '../assets/logo_confession.png'
import { FilledButton, EmptyButton } from './Blocks'
import { NavLink, Link, Outlet } from 'react-router-dom'
import { RiMenu3Fill } from 'react-icons/ri'
import SideMenu from './SideMenu'
import { useDispatch, useSelector } from 'react-redux'
import { toggleModal } from '../state/modalSlice'
import { toggleOpenPost } from '../state/postSlice'
import SideBar from './SideBar'
import RightBar from './RightBar'
import CreatePost from './CreatePost'
const Header = () => {


  const { isOpen } = useSelector((store) => store.modal)
  const { openPost } = useSelector((store) => store.postModal)
  const dispatch = useDispatch()


  const activeStyle = 'font-bold'
  return (
    <div>
      <header className='flex w-full h-[8vh] px-[2.5rem] md:px-[5rem] lg:px-[10rem] py-[1.5rem] justify-between items-center'>
        <Link to='.'>  <img src={logo} alt="" className='h-[25px] w-[100px] md:h-[35px] md:w-[150px]' /></Link>
        <nav className='font-regular text-lg '>
          <ul className='hidden gap-8 lg:flex'>
            <li  className=' hover:text-slate-500'>
              <NavLink to='.'
                className={({ isActive }) =>
                  (isActive ? 'font-bold' : null)
                }

              >
                Home
              </NavLink>

            </li>
            <li className=' hover:text-slate-500'>
              <NavLink to='categories'
                className={({ isActive }) =>
                  (isActive ? 'font-bold' : null)
                }
              >
                Categories
              </NavLink>
            </li>
            <li className=' hover:text-slate-500'>
              <NavLink to='about'
                className={({ isActive }) =>
                  (isActive ? 'font-bold' : null)
                }
              >
                About
              </NavLink>
            </li>
            <li className=' hover:text-slate-500'><NavLink to='feedback'
              className={({ isActive }) =>
                (isActive ? 'font-bold' : null)
              }
            >
              FAQs
            </NavLink></li>
          </ul>
        </nav>
        <div className="hidden lg:flex gap-5">
          <Link to='login'>

            <FilledButton logIn='Log In' />
          </Link>
          <Link to='signup'>

            <EmptyButton signUp='Sign Up' />
          </Link>

        </div>
        <div className='lg:hidden text-2xl '>
          <RiMenu3Fill onClick={() => dispatch(toggleModal())} />
        </div>

      </header>
      {isOpen && <SideMenu />}
      <div className='flex justify-center h-full bg-lightWhite md:px-4 overflow-x-auto gap-4'>
        <div className="hidden md:flex justify-center lg:w-[400px] h-[92vh] flex-grow ">
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

export default Header
