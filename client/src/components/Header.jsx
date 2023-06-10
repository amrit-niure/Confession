import React from 'react'
import logo from '../assets/logo_confession.png'
import { toggleModal } from '../state/modalSlice'
import { useDispatch} from 'react-redux'
import { NavLink, Link } from 'react-router-dom'
import { FilledButton, EmptyButton } from './Blocks'


import { RiMenu3Fill } from 'react-icons/ri'



const Header = () => {
  const dispatch = useDispatch()

  return (
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
  )
}

export default Header
