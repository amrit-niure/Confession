import express from 'express'
import {singlePost} from '../controllers/singlePost.js'
import { verifyToken } from '../middleware/auth.js'

const router = express.Router()

router.get('/:id',singlePost)

export default router