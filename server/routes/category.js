import express from 'express'
import {getCategoryPosts} from '../controllers/category.js'
import { verifyToken } from '../middleware/auth.js'

const router = express.Router()

router.get('/category/:topic',verifyToken,getCategoryPosts)

export default router