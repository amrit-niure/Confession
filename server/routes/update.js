import express from 'express'
import { updatePost } from '../controllers/updatePost.js'

const router = express.Router()

router.put('/update/:id',updatePost)

export default router