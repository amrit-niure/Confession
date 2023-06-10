import Post from '../models/Post.js'

export const postFeed = async(req,res)=>{
    try {
        console.log(req.body)
  const post = new Post(req.body)
  await post.save()
  res.status(201).json(post)

        
    } catch (err) {
        res.status(409).json({message:err.message })
        
    }
}
