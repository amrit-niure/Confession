
import Post from '../models/Post.js'

export const getCategoryPosts = async (req,res) =>{
    try {
        const { topic } = req.params
        const posts = await Post.find({category : topic})
        res.status(200).json(posts)

    } catch (err) {
        res.status(409).json({message:`${err.message}` })
    }
}