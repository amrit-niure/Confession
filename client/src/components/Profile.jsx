import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
  const { userPosts } = useSelector((store) => store.userPostData)
console.log(userPosts)
  return (
    <div>
      Profile
    </div>
  )
}

export default Profile
