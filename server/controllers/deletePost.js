import Post from '../models/Post.js'

export const deletePost = async (req,res) => {
    try {
        const id  = req.params.id
        // const post = await Post.findByIdAndDelete(id);
        const post = await Post.deleteMany({});
        if(!post){
          res.status(200).json({msg : `There is no Post with ID : ${id} in the database`})
        }else{
          res.status(200).json({msg: `Post with ID ${id} was deleted.`});
        }
    } catch (err) {
        res.status(409).json({message:`Catched Error ${err.message}` })
    }
}
