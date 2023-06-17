import User from '../models/Users.js'

export const userDetails = async(req,res)=>{
    try {
        const id = req.params.id
        const user = await User.findById(id)
        console.log(user)
        res.status(200).json(user)
    } catch (err) {
        res.status(409).json({message:`${err.message}` })
        
    }
}

