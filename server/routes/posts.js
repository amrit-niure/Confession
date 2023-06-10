import express from 'express'
import {getFeedPosts} from '../controllers/getPosts.js'

const router = express.Router()

router.get('/',getFeedPosts)

export default router