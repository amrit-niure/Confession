import express from 'express'
import {getQuestions} from '../controllers/faq.js'
import { verifyToken } from '../middleware/auth.js'

const router = express.Router()

router.get('/guides',verifyToken,getQuestions)

export default router