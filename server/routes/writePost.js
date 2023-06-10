import express from 'express'
import {postFeed} from '../controllers/postFeed.js'

const router = express.Router()

router.post('/post',postFeed)

export default router