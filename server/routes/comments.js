import express from 'express'
import {writeComments} from '../controllers/writeComments.js'
import { verifyToken } from '../middleware/auth.js'

const router = express.Router()

router.put('/:id/comments',verifyToken,writeComments)

export default router