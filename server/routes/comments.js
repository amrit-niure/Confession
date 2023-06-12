import express from 'express'
import {writeComments} from '../controllers/writeComments.js'
import { verifyToken } from '../middleware/auth.js'

const router = express.Router()

router.put('/:id/comments',writeComments)

export default router