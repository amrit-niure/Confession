import React from 'react'
import Post from './Post'
import Write from './Write'
import { useEffect } from 'react'
import { getFeedPost } from '../state/displayPostSlice'
import { useDispatch, useSelector } from 'react-redux'
import UpdatePost from './UpdatePost'
import { useParams } from 'react-router-dom';
import { userDetails } from '../state/userDetailsSlice'
import { getuserPosts } from '../state/userPostsSlice'

const Home = (props) => {

  const { id } = useParams();
  const { posts } = useSelector((state) => state.post)
  const dispatch = useDispatch()
  const { openUpdate } = useSelector((store) => store.update)
  const { user } = useSelector((store) => store.userData)
  useEffect(() => {
    dispatch(getFeedPost())
      dispatch(userDetails(id))
      dispatch(getuserPosts(user._id)) 
  },[])
  return (
    <div className='w-[400px] md:w-[500px] flex flex-col gap-2  '>
      <Write name = {user.name}/>

     {
        posts.map((item) => (
            <Post 
          key={item._id}
          id={item._id}
          identifier={item.userId}
          name={item.name} 
          date={item.date}
          category={item.category}
          heading={item.heading}
          description={item.description}
          comments={item.comments}
          likes={item.likes}
          />
           
       
        
              ))
      } 
      {openUpdate && <UpdatePost />}
    </div>
  )
}

export default Home
