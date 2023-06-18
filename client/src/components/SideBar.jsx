import React from 'react'
import {NavLink,Link} from 'react-router-dom'
import {FaUserAlt} from 'react-icons/fa'
import {FaHome} from 'react-icons/fa'
import {FaFolderOpen} from 'react-icons/fa'
import {SiBlogger} from 'react-icons/si'
import {MdFeedback} from 'react-icons/md'
import { useDispatch,useSelector } from 'react-redux'
import { getuserPosts } from '../state/userPostsSlice'
import { useEffect } from 'react'


const SideBar = () => {
    const { user } = useSelector((store) => store.userData)
    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(getuserPosts(user._id)) 
      },[dispatch])
      
  return (
    <aside className=' w-[300px] pb-[2rem] flex flex-col justify-between '>
        <ul className='flex flex-col gap-6 text-md lg:text-lg items-start'>
            <li className='hover:bg-white hover:rounded-r-full' >
                <NavLink to='profile' className='flex gap-4 justify-baseline items-center px-4 py-2 '> <FaUserAlt className='text-lg lg:text-xl'/> <h1>User Profile</h1></NavLink>
            </li>
            <li className='hover:bg-white hover:rounded-r-full'>
                <NavLink to='.' className='flex gap-4 justify-center items-center px-4 py-2 '><FaHome className='text-2xl '/> <h1>Home</h1></NavLink>
            </li>
            <li className='hover:bg-white hover:rounded-r-full'>
                <NavLink to='categories' className='flex gap-4 justify-center items-center px-4 py-2 '> <FaFolderOpen className='text-xl ' /> <h1>Categories</h1></NavLink>
            </li>

            <li className='hover:bg-white hover:rounded-r-full'> 
                <NavLink to='feedback' className='flex gap-4 justify-center items-center px-4 py-2 '> <MdFeedback className='text-2xl'/> <h1>FAQs</h1></NavLink>
            </li>
           
        </ul>
       <div>
       <ul>
        <li>
            <Link to="." className='text-slate-500 hover:text-black'>Terms and Conditions</Link>
        </li>
        <li>
            <Link to="." className='text-slate-500 hover:text-black'>Privacy Policy</Link>
        </li>
        <li>
          <p>Version 0.1</p> 
        </li>
       </ul>

       </div>
    </aside>
  )
}

export default SideBar
