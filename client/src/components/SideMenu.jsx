import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { AiOutlineHome} from 'react-icons/ai'
import { TbCategory } from 'react-icons/tb'
import { MdOutlineFeedback } from 'react-icons/md'
import { BiLogInCircle } from 'react-icons/bi'
import { GoSignIn } from 'react-icons/go'
import { IoInformationCircleOutline } from 'react-icons/io5'
import { closeModal, openModal,toggleModal } from '../state/modalSlice'
import { useDispatch } from 'react-redux'

const SideMenu = () => {
    const dispatch = useDispatch()
    return (
        <div className='absolute lg:hidden flex justify-center items-center h-[92vh] w-full bg-white'>
            <nav className='flex py-[3rem] items-center w-[60vw] pl-[2rem] border-2 '>
                <ul className='flex flex-col gap-4 text-xl items-start' onClick={() =>dispatch(toggleModal())}>
                    <li>
                        <NavLink to="." className='flex gap-4 justify-center items-center'> <AiOutlineHome className='text-2xl' /> <h1 className='text-lg'>Home</h1></NavLink>
                    </li>
                    <li>
                        <NavLink to="categories" className='flex gap-4 justify-center items-center'> <TbCategory className='text-2xl' /> <h1 className='text-lg'>Categories</h1></NavLink>
                    </li>
                    <li>
                        <NavLink to="about" className='flex gap-4 justify-center items-center'> <IoInformationCircleOutline className='text-2xl' /> <h1 className='text-lg'>About</h1></NavLink> 
                    </li>
                    <li>
                        <NavLink to="feedback" className='flex gap-4 justify-center items-center'> <MdOutlineFeedback className='text-2xl' /> <h1 className='text-lg'>FAQs</h1></NavLink>
                    </li>
                    <hr />
                    <li>
                        <Link to="." className='flex gap-4 justify-center items-center'> <BiLogInCircle className='text-2xl' /> <h1 className='font'>Log In</h1></Link>
                    </li>
                    <li>
                        <Link to="." className='flex gap-4 justify-center items-center'> <GoSignIn className='text-2xl' /> <h1 className='text-lg'>Sign Up</h1></Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default SideMenu
