import express from 'express'
import {getUserPosts} from '../controllers/userPosts.js'
import { verifyToken } from '../middleware/auth.js'

const router = express.Router()

router.get('/posts/:id',verifyToken,getUserPosts)

export default router