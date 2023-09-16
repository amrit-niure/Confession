import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import profile from '../assets/coding.jpg'
import { BsPostcardHeart } from 'react-icons/bs'
import { SlLocationPin } from 'react-icons/sl'
import { RxPerson } from 'react-icons/rx'
import { FiHeart } from 'react-icons/fi'
import { TbHeartBroken } from 'react-icons/tb'
import Write from './Write'
import Post from './Post'
import { useEffect } from 'react'
import { getuserPosts } from '../state/userPostsSlice'
import { useParams } from 'react-router-dom';
import { userDetails } from '../state/userDetailsSlice'



const Profile = () => {

  const { id } = useParams();
  const dispatch = useDispatch()
  const { userPosts } = useSelector((store) => store.userPostData)
  const { user } = useSelector((store) => store.userData)
  console.log(userPosts)

useEffect(()=> {
  dispatch(userDetails(id))
  dispatch(getuserPosts(id)) 
},[dispatch])


  return (
    <div className='flex flex-col gap-2'>
      {/* profile  */}

      <div className=' relative w-[400px] md:w-[500px] mt-[8rem] bg-white flex items-center flex-col gap-[20px] pb-[20px]' >
        <div className='absolute h-[108px] w-[108px] bg-[#8491df] rounded-full top-[-4.5rem] flex items-center justify-center'>
          <img src={profile} alt="profile" className=' absolute w-[100px] h-[100px] rounded-full border-[2px] border-white' />
        </div>
        {/* name */}
        <div className='flex items-center justify-center pt-[3rem]'>
          <h1 className='text-xl font-bold'>{user.name}</h1>
        </div>
        {/* details  */}
        <div className='flex flex-wrap px-[30px] gap-4 items-center justify-center'>
          <span className='w-auto h-auto bg-lightWhite text-lg px-4 rounded-full py-1 flex gap-2 items-center justify-center cursor-pointer hover:bg-[#D7D3F4]'><BsPostcardHeart /> <h1>5 Confessions</h1></span>
          <span className='w-auto h-auto bg-lightWhite text-lg px-4 rounded-full py-1 flex gap-2 items-center justify-center cursor-pointer hover:bg-[#D7D3F4]'><SlLocationPin /> <h1>Sydney, Australia</h1></span><br />
          <span className='w-auto h-auto bg-lightWhite text-lg px-4 rounded-full py-1 flex gap-2 items-center justify-center cursor-pointer hover:bg-[#D7D3F4]'><RxPerson /> <h1>Age : 20</h1></span>
          <span className='w-auto h-auto bg-lightWhite text-lg px-4 rounded-full py-1 flex gap-2 items-center justify-center cursor-pointer hover:bg-[#D7D3F4]'><FiHeart /> <h1>Love</h1></span>
          <span className='w-auto h-auto bg-lightWhite text-lg px-4 rounded-full py-1 flex gap-2 items-center justify-center cursor-pointer hover:bg-[#D7D3F4]'><TbHeartBroken /> <h1>Heart Break</h1></span>
        </div>
      </div>
      <div>
        <Write name={user.name} />
      </div>
      {
        userPosts.map((userPosts) => (
      <div className='flex flex-col gap-2'>
        {/* posts  */}
        <Post
         key={userPosts._id}
         id={userPosts._id}
         identifier={userPosts.userId}
         name={userPosts.name} 
         date={userPosts.date}
         category={userPosts.category}
         heading={userPosts.heading}
         description={userPosts.description}
         comments={userPosts.comments}
         likes={userPosts.likes}
        />
  
      </div>
       
       ))
      } 

    </div>
  )
}

export default Profile
