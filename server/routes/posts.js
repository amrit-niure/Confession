import express from 'express'
import {getFeedPosts} from '../controllers/posts.js'

const router = express.Router()

router.get('/',getFeedPosts)

export default router