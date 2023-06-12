import React from 'react'
import profile from '../assets/coding.jpg'
import {BsSend} from 'react-icons/bs'
import { toggleOpenPost} from '../state/postSlice'
import { useDispatch } from 'react-redux'
const Write = () => {
  const dispatch = useDispatch()
  return (
    <div className='flex p-[2rem] bg-white w-full items-center justify-between h-[10vh]'>
      <div className='border-2 rounded-full p-[2px]'>
        <img src={profile} alt="picture" className='w-[50px] h-[50px] min-w-[51px] min-h-[51px] rounded-full ' />
        </div>
        <div onClick={()=> dispatch(toggleOpenPost())}>
            <input type="text" className='focus:outline-none bg-lightWhite rounded-3xl h-[40px]  w-[13rem]  lg:w-[18rem] px-[2rem]' placeholder='Whats on your mind ?' />
        </div>
        <div  className="rounded-full w-[40px] h-[40px] bg-lightWhite flex items-center justify-center">
        <BsSend className=' text-2xl '/>
        </div>
    </div>
  )
}

export default Write
