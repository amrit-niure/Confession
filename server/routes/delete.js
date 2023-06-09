import express from 'express'
import { verifyToken } from '../middleware/auth.js'
import {deletePost} from '../controllers/deletePost.js'
const router = express.Router()

router.delete("/delete/:id",verifyToken,deletePost)

export default router