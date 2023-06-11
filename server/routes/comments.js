import express from 'express'
import {writeComments} from '../controllers/writeComments.js'

const router = express.Router()

router.put('/:id/comments',writeComments)

export default router