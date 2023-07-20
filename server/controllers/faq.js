import Guide from '../models/Guides.js'

export const getQuestions = async(req,res)=>{
    try {
        const guides = await Guide.find()
        res.status(200).json(guides)
    } catch (err) {
        res.status(409).json({message:`${err.message}` })
        
    }
}
