import React from 'react'
import profile  from '../assets/coding.jpg'
import {BiLike,BiComment} from 'react-icons/bi'
import {BsFillReplyFill} from 'react-icons/bs'
const Post = () => {
  return (
    <div className='p-[2rem] bg-white w-full'>
      {/* User section  */}
      <div className='flex gap-4  items-center'>
        <div className='border-2 rounded-full p-[2px]'>

       <img src={profile} alt="profile" className='w-[50px] h-[50px] rounded-full '/>
        </div>
       <div className="div">
       <h1 className='text-lg font-bold'>Amrit Niure</h1>
    <p className='text-lightText text-sm'>Confessed : <span className='text-black'> 17 April 2022 </span> In : <span className='text-black'>Betrayal</span></p>
       </div>
      </div>
      {/* description section  */}
      <div className='py-[2rem]'>
      <h1 className='font-bold text-xl'>Heading of Confession</h1>
      <p className='text-justify text-lightText'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate repudiandae, at dolor reprehenderit dolorem vitae magnam eum architecto ducimus perspiciatis, asperiores blanditiis quidem possimus molestiae ipsa animi, praesentium ullam ex ratione? Eos ullam voluptatem soluta animi iste nihil ipsa ipsam officia? Voluptatem corporis consectetur magni laudantium blanditiis vel veniam deserunt?</p>
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
  )
}

export default Post
