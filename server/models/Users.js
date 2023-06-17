import mongoose from 'mongoose'
const userSchema = mongoose.Schema({
    userId: {
        type:  mongoose.Schema.Types.ObjectId,
        default :  new mongoose.Types.ObjectId()
    },
    name : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
    },
    password : {
        type : String,
        required : true,
    }
},
{timestamps: true}
)

const User = mongoose.model("User",userSchema)
export default User