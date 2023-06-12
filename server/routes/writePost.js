import express from 'express'
import {postFeed} from '../controllers/postFeed.js'
import { verifyToken } from '../middleware/auth.js'

const router = express.Router()

router.post('/post',postFeed)

export default router