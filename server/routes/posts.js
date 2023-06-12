import express from 'express'
import {getFeedPosts} from '../controllers/getPosts.js'
import { verifyToken } from '../middleware/auth.js'

const router = express.Router()

router.get('/',verifyToken,getFeedPosts)

export default router