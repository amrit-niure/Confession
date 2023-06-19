import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { getCategoryPosts } from '../state/categorySlice';
import Post from './Post';



const Specific = () => {

    const { categoryPosts } = useSelector((store) => store.categoryPostData)
    const { posts } = useSelector((store) => store.post)
    const dispatch = useDispatch()
    const { topic } = useParams();

    useEffect(() => {
        dispatch(getCategoryPosts(topic))
  

    }, [posts])
    return (
        <div className='pt-[3rem] w-[400px] md:w-[500px] flex flex-col  gap-2 '>
            <div>
                <span className='text-lg italic underline'>Category : <b> {topic} </b></span>
            </div>
            {
                categoryPosts.map((item) => (
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
        </div>
    )
}

export default Specific
