import React from 'react'
import Post from './Post'
import Write from './Write'
import { useEffect } from 'react'
import { getFeedPost } from '../state/displayPostSlice'
import profile from '../assets/coding.jpg'
import { useDispatch, useSelector } from 'react-redux'

const Home = (props) => {

  const { posts } = useSelector((state) => state.post)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getFeedPost())
  }, [])

  return (
    <div className='w-[400px] lg:w-[500px]  flex flex-col gap-2'>
      <Write />

    {
        posts.map((item) => (
            <Post 
          key={item._id}
          id={item.userId}
          name={item.name} 
          date={item.date}
          category={item.category}
          heading={item.heading}
          description={item.description}
          comments={item.comments}
          />
              ))
      }

    </div>
  )
}

export default Home
