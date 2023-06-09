import React from 'react'
import profile  from '../assets/coding.jpg'
import {BiLike,BiComment} from 'react-icons/bi'
import {BsFillReplyFill} from 'react-icons/bs'
import {useDispatch, useSelector } from 'react-redux'
import { getFeedPost } from '../state/displayPostSlice'
import { useEffect } from 'react'
const Post = () => {
  const dispatch = useDispatch()
  const {posts,loading} = useSelector((state)=> state.post)

useEffect(()=>{
  dispatch(getFeedPost())
},[])

// console.log(posts)
  return (
<>
    { 
posts.map((item) => (
    <div className='p-[2rem] bg-white w-full' key={item._id}>
        {/* User section  */}
        <div className='flex gap-4  items-center'>
          <div className='border-2 rounded-full p-[2px]'>
  
         <img src={profile} alt="profile" className='w-[50px] h-[50px] rounded-full '/>
          </div>
         <div className="div">
         <h1 className='text-lg font-bold'>{item.name}</h1>
      <p className='text-lightText text-sm'>Confessed : <span className='text-black'> {item.date}</span> In : <span className='text-black'>{item.category}</span></p>
         </div>
        </div>
        {/* description section  */}
        <div className='py-[2rem]'>
        <h1 className='font-bold text-xl'>{item.heading}</h1>
        <p className='text-justify text-lightText'>{item.description}</p>
        </div>
        {/* iocns section  */}
        <div className='flex items-center justify-between'>
          <div className='flex gap-2 items-center'>
  <BiLike  className='text-xl'/>
  <span>Like</span>
          </div>
          <div className='flex gap-2 items-center'>
  <BiComment  className='text-xl'/> 
  <span>Comment</span>       
          </div>
          <div className='flex gap-2 items-center'>
  <BsFillReplyFill className='text-xl' />
  <span>Share</span>
          </div>
  
        </div>
        {/* like comment details section  */}
        <div className='pt-[2rem] flex justify-end'>
        <span><i> 0 Likes 0 comments 0 shares</i></span>
        </div>
      </div>
)) 
 } 
      </>
  )
}

export default Post
