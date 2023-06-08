import React from 'react'
import {NavLink,Link} from 'react-router-dom'
import {FaUserAlt} from 'react-icons/fa'
import {FaHome} from 'react-icons/fa'
import {FaFolderOpen} from 'react-icons/fa'
import {SiBlogger} from 'react-icons/si'
import {MdFeedback} from 'react-icons/md'

const SideBar = () => {
  return (
    <aside className='pl-[2rem] lg:pl-0 pt-[4rem] pb-[2rem] flex flex-col justify-between '>
        <ul className='flex flex-col gap-8 text-md lg:text-lg items-start'>
            <li>
                <NavLink to='.' className='flex gap-4 justify-baseline items-center'> <FaUserAlt className='text-lg lg:text-xl'/> <h1>User Profile</h1></NavLink>
            </li>
            <li>
                <NavLink to='.' className='flex gap-4 justify-center items-center'><FaHome className='text-2xl '/> <h1>Home</h1></NavLink>
            </li>
            <li>
                <NavLink to='categories' className='flex gap-4 justify-center items-center'> <FaFolderOpen className='text-xl ' /> <h1>Categories</h1></NavLink>
            </li>
            <li>
                <NavLink to='about' className='flex gap-4 justify-center items-center'> <SiBlogger className='text-2xl '/> <h1>Blogs</h1></NavLink>
            </li>
            <li>
                <NavLink to='feedback' className='flex gap-4 justify-center items-center'> <MdFeedback className='text-2xl'/> <h1>FAQs</h1></NavLink>
            </li>
           
        </ul>
       <div>
       <ul>
        <li>
            <Link to=".">Terms and Conditions</Link>
        </li>
        <li>
            <Link to=".">Privacy Policy</Link>
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
