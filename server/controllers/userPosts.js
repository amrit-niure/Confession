import Post from '../models/Post.js'

export const getUserPosts = async (req,res) =>{
    try {
        const { id } = req.params
        const posts = await Post.find({userId : id})
        res.status(200).json(posts)

    } catch (err) {
        res.status(409).json({message:`${err.message}` })
    }
}