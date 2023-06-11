import React,{useState,useEffect} from 'react'
import profile from '../assets/coding.jpg'
import { BiLike, BiComment, BiSend } from 'react-icons/bi'
import { BsFillReplyFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { getFeedPost } from '../state/displayPostSlice'
import { useFormik } from 'formik'
import axios from 'axios';

const Post = ({ name, date, category, heading, description,comments }) => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getFeedPost())
  }, [])

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
console.log(comments)

    const { handleSubmit, handleChange, values, touched, errors, handleBlur } = useFormik({
        initialValues: {
          comment: []
        },
        onSubmit: async (initialValues) => {
            try {
                await axios.post('http://192.168.0.8:5000/posts/post', initialValues)
            } catch (error) {
                console.log(error)

            }
           
        }
    })



  return (
    <>
      <div className='p-[2rem] bg-white w-full'>
        {/* User section  */}
        <div className='flex gap-4  items-center'>
          <div className='border-2 rounded-full p-[2px]'>

            <img src={profile} alt="profile" className='w-[50px] h-[50px] rounded-full ' />
          </div>
          <div className="div">
            <h1 className='text-lg font-bold'>{name}</h1>
            <p className='text-lightText text-sm'>Confessed : <span className='text-black'> {date}</span> In : <span className='text-black'>{category}</span></p>
          </div>
        </div>
        {/* description section  */}
        <div className='py-[2rem]'>
          <h1 className='font-bold text-xl'>{heading}</h1>
          <p className='text-justify text-lightText'>{description}</p>
        </div>
        {/* iocns section  */}
        <div className='flex items-center justify-between'>
          <div className='flex gap-2 items-center cursor-pointer' >
            <BiLike className='text-xl' />
            <span>Like</span>
          </div>
          <div className='flex gap-2 items-center cursor-pointer' onClick={handleClick}>
            {/*  Comment */}
            <BiComment className='text-xl' />
            <span >Comment</span>
          </div>
          <div className='flex gap-2 items-center cursor-pointer'>
            <BsFillReplyFill className='text-xl' />
            <span>Share</span>
          </div>

        </div>
        {/* like comment details section  */}
        <div className='pt-[2rem] flex justify-end'>
          <span><i> 0 Likes <span>{comments.length}</span> Comments 0 shares</i></span>
        </div>
        {/* comment accordian */}
        {isClicked && <div  >
          <hr />
          <div className='pt-2'>
            <h1 className='font-bold'>Comments</h1>
          </div>
          <div className='flex gap-4 py-2 items-center'>
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
            {/* onClick={handleSubmit} */}
            <div className='cursor-pointer' >
              <BiSend className='text-xl' />
            </div>
          </div>
          <div >
           {comments.map((item)=> <p>{item}</p>)}
          </div>
        </div>
        }
      </div>
    </>
  )
}

export default Post

