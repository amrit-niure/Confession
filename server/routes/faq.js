import express from 'express'
import {getQuestions} from '../controllers/faq.js'
import { verifyToken } from '../middleware/auth.js'

const router = express.Router()

router.get('/guides',getQuestions)

export default router