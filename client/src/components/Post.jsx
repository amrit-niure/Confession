import React, { useState, useEffect } from 'react'
import profile from '../assets/coding.jpg'
import { Link, useParams } from 'react-router-dom';
import { BiLike, BiComment, BiSend,BiDotsHorizontalRounded } from 'react-icons/bi'
import { BsFillReplyFill } from 'react-icons/bs'
import { LuEdit } from 'react-icons/lu'
import { MdOutlineReportProblem } from 'react-icons/md'
import { AiTwotoneLike,AiOutlineDelete } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { getFeedPost,updatePost } from '../state/displayPostSlice'
import { toggleUpdatePost } from '../state/updatePostSlice'
import { useFormik } from 'formik'
import { setPostDetails } from "../state/updatePostSlice";
import axios from 'axios';


const Post = ({ likes, name,identifier, date, category, heading, description, comments, id }) => {
  const endpoint = import.meta.env.VITE_ENDPOINT;
// to store the selected data 
const { user } = useSelector((store) => store.userData)
  const dispatch = useDispatch()
  useEffect(() => {
    // dispatch(getFeedPost())
  }, [])

  const [rightUser, setRightUser] = useState(true);
  const [isClicked, setIsClicked] = useState(false);
  const [like, setLike] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);
  const [editOn, setEditOn] = useState(false);

  const handleLikeClick = async () => {
    setLike(prev => !prev);
    // await axios.put(`http://192.168.0.8:5000/posts/${id}/comments`, initialValues)
  };
  const handleCommentClick = () => {
    setIsClicked(!isClicked);
  };
  const handleShareClick = () => {
    setShareOpen(prev => !prev)
  };
  const handleEditOn = async () => {
if (name === user.name){
  setEditOn(prev => !prev)
}else{
  setRightUser(prev => !prev)
}
  };
  const handleUpdateOn = () => {
    const payload = {
      post_id:id,
      post_heading:heading,
      post_description:description,
      post_category:category,
    };
    dispatch(setPostDetails(payload));
  };

  const handleDelete = async () => {
    const deleteUrl = `${endpoint}/posts/delete/${id}`
    await axios.delete(deleteUrl,{
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    dispatch(updatePost(id))
  };

  const { handleSubmit, handleChange, values, touched, errors, handleBlur, resetForm } = useFormik({
    initialValues: {
      comment: ''
    },
    onSubmit: async (initialValues) => {
      try {
        console.log(initialValues)
        await axios.put(`${endpoint}/posts/${id}/comments`, initialValues,{
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        })
        resetForm()
        dispatch(getFeedPost())


      } catch (error) {
        console.log(error)

      }

    }
  })



  return (
    <>
      <div className='p-[2rem] bg-white w-full'>
        {/* User section  */}
        <div className='flex gap-4 items-center'>
          {/* bug here, after clicking in link , it acts as the account of the clickked profile  */}
        <Link to={`profile`}> <div className='border-2 rounded-full p-[2px]'>
            <img src={profile} alt="profile" className='w-[50px] h-[50px] rounded-full '/>
          </div></Link>
          <div className="div">
            <Link to={`profile`}><h1 className='text-lg font-bold'>{name}</h1></Link>
            <p className='text-lightText text-sm'>Confessed : <span className='text-black'> {date}</span> In : <span className='text-black'>{category}</span></p>
          </div>
          <div className='relative ml-auto self-start ' onClick={handleEditOn}>
            <div className='flex items-center justify-center hover:bg-lightWhite rounded-full h-[30px] w-[30px]  cursor-pointer hover:transition-all hover:ease hover:duration-300'>

            <BiDotsHorizontalRounded  className='text-xl '/>
            </div>
            { editOn && <div className='absolute top-[30px] right-[20px] w-[170px]'>
  <ul className=' w-full h-full flex flex-col items-left justify-center  '>
    <li className='flex items-center justify-left gap-2 h-[30px] p-2 hover:bg-blackish hover:text-white bg-slate-300 text-blackish rounded-t-md cursor-pointer ' onClick={handleDelete} > <span className='flex items-center justify-left gap-2 ' > <AiOutlineDelete /> <span>Delete Post</span></span></li>

    <li className='flex  items-center justify-left gap-2 h-[30px] p-2 hover:bg-blackish hover:text-white bg-slate-300 text-blackish rounded-b-md cursor-pointer' onClick={()=> {
      dispatch(toggleUpdatePost())
      handleUpdateOn()
      }}>  <span className='flex items-center justify-left gap-2 ' > <LuEdit /> <span>Edit Post</span></span></li>
   
  </ul>
</div>}
{
  !rightUser && <div className='absolute top-[30px] right-[20px] w-[170px]'>
  <ul className=' w-full h-full flex flex-col items-left justify-center  '>
    <li className='flex items-center justify-left gap-2 h-[30px] p-2 hover:bg-blackish hover:text-white bg-slate-300 text-blackish rounded-md cursor-pointer ' > <span className='flex items-center justify-left gap-2 ' > <MdOutlineReportProblem /> <span>Report Post</span></span></li>  
  </ul>
</div>
}
          </div>
        </div>
        {/* description section  */}
        <div className='py-[2rem]'>
          <h1 className='font-bold text-xl'>{heading}</h1>
          <p className='text-justify text-lightText'>{description}</p>
        </div>
        {/* iocns section  */}
        <div className='flex items-center justify-between'>
          <div className='flex gap-2 items-center cursor-pointer self-start  justify-center hover:bg-lightWhite rounded-full h-[40px] w-[80px]  hover:transition-all hover:ease hover:duration-300' onClick={handleLikeClick}>
            {like ? <AiTwotoneLike className='text-xl' /> : <BiLike className='text-xl' />}
            <span>Like</span>
          </div>
          <div  className='flex gap-2 items-center cursor-pointer self-start  justify-center hover:bg-lightWhite rounded-full h-[40px] w-[120px]  hover:transition-all hover:ease hover:duration-300' onClick={handleCommentClick}>
            {/*  Comment */}
            <BiComment className='text-xl' />
            <span >Comment</span>
          </div>
          <div  className='flex gap-2 items-center cursor-pointer self-start  justify-center hover:bg-lightWhite rounded-full h-[40px] w-[80px]  hover:transition-all hover:ease hover:duration-300' onClick={handleShareClick}>
            <BsFillReplyFill className='text-xl' />
            <span>Share</span>
          </div>

        </div>
        {/* like comment details section  */}
        <div>
          <div className='pt-[2rem] flex justify-end'>
            <span><i> <span>{like ? "1" : '0'}</span> Likes <span>{comments.length}</span> Comments </i></span>
          </div>
          {shareOpen && <span className='bg-blackish text-white'>Share option coming soon!</span>}
        </div>
        {/* comment accordian */}
        {isClicked && <div  >
          <hr />
          <div className='pt-2'>
            <h1 className='font-bold'>Comments</h1>
          </div>
          <form className='flex gap-4 py-2 items-center' onSubmit={handleSubmit}>
            <img src={profile} alt="profile" className='w-[30px] h-[30px] rounded-full ' />
            <input
              type="text"
              className='bg-lightWhite rounded-full focus:outline-none  px-4 py-1 w-full'
              placeholder='Type your Comment..'
              value={values.comment}
              name='comment'
              onChange={handleChange}
              onBlur={handleBlur}

            />
            <button type='submit' className='cursor-pointer flex items-center justify-center w-[44px] h-[30px]  border-[1px] border-blackish rounded-sm' >
              <BiSend className='text-xl' />
            </button>
          </form>
          <div >
            {comments.map((item) => <p>{item}</p>)}
          </div>
        </div>
        }
      </div>

    </>
  )
}

export default Post

