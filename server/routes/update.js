import express from 'express'
import { updatePost } from '../controllers/updatePost.js'
import { verifyToken } from '../middleware/auth.js'
const router = express.Router()

router.put('/update/:id',verifyToken,updatePost)

export default router