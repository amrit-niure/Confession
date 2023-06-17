import Post from '../models/Post.js'

export const singlePost = async(req,res)=>{
    try {
        const { id } = req.params
        const post = await Post.findById(id)
        res.status(200).json(post)
    } catch (err) {
        res.status(409).json({message:`${err.message}` })
        
    }
}
