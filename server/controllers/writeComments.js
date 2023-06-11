import Post from '../models/Post.js'

export const writeComments = async (req, res) => {
  try {
    const id = req.params.id
    const comment = req.body.comments
    console.log(id)
    console.log(comment)
    const updated = await Post.findByIdAndUpdate(
      id,
      { $push: { comments: comment } },
      { new: true, useFindAndModify: false }
      )
    res.status(201).json(updated)
  } catch (err) {
    res.status(409).json({ message: err.message })

  }
}
