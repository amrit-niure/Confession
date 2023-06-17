import express from 'express'
const app = express()
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import morgan from 'morgan'
import helmet from 'helmet'
import multer from 'multer'
import Post from './models/Post.js'
import {posts} from './data/index.js'


import path from 'path'
import { fileURLToPath } from 'url'
// To get the file directory with its file name 
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
app.use('/assets',express.static(path.join(__dirname,'/public/assets')))

dotenv.config()

// Pre built middlewares 
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({policy : "cross-origin"}))
const upload = multer();

app.use(morgan("common"))
app.use(bodyParser.json({limit : '30mb', extended : true}))
app.use(bodyParser.urlencoded({limit : '30mb', extended : true}))
app.use(cors())


// Routes 
// to get feed posts
import postRoutes from './routes/posts.js'
app.use('/posts',postRoutes)
// to post the posts form up
import writepostRoutes from './routes/writePost.js'
app.use('/posts',writepostRoutes)
// to comment in the specific post
import writeComments from './routes/comments.js'
app.use('/posts',writeComments)
// to register the user
import authRoutes from './routes/auth.js'
app.use('/auth',authRoutes)

import deleteRoutes from './routes/delete.js'
app.use('/posts',deleteRoutes)

import updateRoutes from './routes/update.js'
app.use('/posts',updateRoutes)

import userDetailsRoute from './routes/userDetails.js'
app.use('/user',userDetailsRoute)

import singlePostRoute from './routes/singlePost.js'
app.use('/posts',singlePostRoute)

import userPostsRoute from './routes/userPosts.js'
app.use('/user',userPostsRoute)

import categoryRoutes from './routes/category.js'
app.use('/posts',categoryRoutes)


// Moongoose Setup 
const PORT = process.env.PORT || 8080
const connectDB = async () => {
    try {
        // connection string 
        const con = await mongoose.connect('mongodb://127.0.0.1:27017/real', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log(`Mongo DB Connected : ${con.connection.host}`)
        app.listen(PORT,()=> console.log(`Server Listening on port : ${PORT}`))
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}
// Establish a connection 
connectDB()
// Post.insertMany(posts)

