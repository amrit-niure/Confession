import mongoose from "mongoose";
const guideSchema = mongoose.Schema({
    question: {
        type: String,
        required : true 
        },
    answer: {
        type: String,
        required : true 
        }
})

const Guide = mongoose.model("Guide",guideSchema,'guides')
export default Guide