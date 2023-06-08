import React from 'react'
import profile from '../assets/coding.jpg'
import '../index.css'
import { toggleOpenPost} from '../state/postSlice'
import { useDispatch } from 'react-redux'


const CreatePost = () => {
  const dispatch = useDispatch()

    return (
        <div className='fixed top-0 left-0 h-full w-full bg-black bg-opacity-50 flex items-center justify-center'>
            <div className=' w-[500px] bg-[#382B35] text-white flex flex-col px-[2rem] py-[1rem] justify-between gap-6 rounded-lg'>
                {/* heading  */}
                <div>
                    <h1 className='text-center text-xl font-bold pb-[.5rem]'>Create Post</h1>
                <hr />
                </div>
                {/* profile section  */}
                <div className='flex gap-4'>
                    {/* photo  */}
                    <div>
                        <img src={profile} alt="picture" className='w-[60px] h-[60px] rounded-full ' />
                    </div>
                    {/* name and topic  */}
                    <div>
                        <h1>Amrit Niure</h1>
                        <select className="text-black">
                            <option value="" disabled selected>Topic</option>
                            <option value="option1">Love</option>
                            <option value="option2">Betrayal</option>
                            <option value="option3">Murder</option>
                        </select>
                    </div>
                </div>
                {/* textarea  */}
                <div>
                    <textarea className='bg-[#382B35]  h-[100px] resize-none focus:outline-none w-full scrollbar-w-0 p-[.5rem] text-lg' placeholder="What's on your mind?"></textarea>
                </div>
                {/* button  */}
                <div>
                    <button type='button' className='bg-white text-black w-full py-[6px] text-lg border-2 custom-scrollbar hover:bg-[#382B35] hover:text-white hover:border-2' onClick={()=> dispatch(toggleOpenPost())}>POST</button>
                </div>
            </div>
        </div>
    )
}

export default CreatePost
