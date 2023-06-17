import Post from '../models/Post.js'

export const updatePost = async (req,res) => {
try {
    const data = req.body
    const id = req.params.id
    const update = await Post.findByIdAndUpdate(id,data,{ new: true , useFindAndModify: false})
    if(!update){
        res.status(200).json({msg : `There is no Post with ID : ${id} in the database`})
      }else{
        res.send(update)
      }
         
} catch (err) {
    res.status(409).json({message:`Catched Error ${err.message}` })
    
}
}