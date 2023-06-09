import mongoose from 'mongoose'
const postSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    heading :{
        type : String,
        required : true,
    },
    description :{
        type : String,
        required : true,
    },
    date: {
        type: String,
        // default: Date.now()
        default: () => new Date().toISOString().substring(0, 10)
      },
    category: String,
    likes: {
        type: Map,
        of: Boolean
    },
    comments: {
        type: Array,
        default: []
    }
},
    { timestamps: true }
)


const Post = mongoose.model("Post",postSchema)
export default Post