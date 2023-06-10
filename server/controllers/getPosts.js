import Post from '../models/Post.js'

export const getFeedPosts = async(req,res)=>{
    try {
        const post = await Post.find()
        res.status(200).json(post)
    } catch (err) {
        res.status(409).json({message:err.message })
        
    }
}
