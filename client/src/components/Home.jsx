import React from 'react'
import Post from './Post'
import Write from './Write'


const Home = () => {
  return (
    <div className='w-[400px] lg:w-[500px]  flex flex-col gap-2'>
      <Write />
<Post />
<Post />
<Post />
<Post />

    </div>
  )
}

export default Home
