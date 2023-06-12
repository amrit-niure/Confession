import React from 'react'
import logo from '../assets/logo_confession.png'
import { toggleModal } from '../state/modalSlice'
import { useDispatch} from 'react-redux'
import { NavLink, Link } from 'react-router-dom'
import { FilledButton, EmptyButton } from './Blocks'
import profile from '../assets/coding.jpg'
import '../index.css'
import { RiMenu3Fill } from 'react-icons/ri'
import { FaUserAlt } from 'react-icons/fa'
import { BiLogOutCircle } from 'react-icons/bi'
import { useState } from 'react'



const Header = () => {
  const dispatch = useDispatch()
  const [isProfileOn,setIsProfileOn] = useState(false)
  const handleProfileOn= () =>{
    setIsProfileOn(prev => !prev)
  }
  const handleLog= () =>{
// logic to log out 
  }
  return (
<header className='flex w-full h-[8vh] px-[2.5rem] md:px-[5rem] lg:px-[10rem] py-[1.5rem] justify-between items-center relative'>
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
          <div className='cursor-pointer border-[2px] p-[2px] border-slate-400 rounded-full relative' onClick={()=> handleProfileOn()}>
  <img src={profile} alt="" className='w-[40px] h-[40px] rounded-full '/>
{ isProfileOn && <div className='absolute w-[110px] h-[80px] top-[7vh] right-[2vw] '>
  <ul className=' w-full h-full flex flex-col items-left justify-center text-lg  '>
    <li className='flex  items-center justify-left gap-2  p-2 bg-white hover:bg-lightWhite rounded-t-md'> <FaUserAlt/><span>Profile</span></li>
    <li className='flex  items-center justify-left gap-2 p-2 bg-white hover:bg-lightWhite rounded-b-md'> <BiLogOutCircle/><span>Log Out</span></li>
   
  </ul>
</div>}
          </div>

        </div>
        <div className='lg:hidden text-2xl '>
          <RiMenu3Fill onClick={() => dispatch(toggleModal())} />
        </div>


     </header>
  )
}

export default Header
