import express, { type Request, type Response } from 'express'
import Post from '../models/postModel.js'

const router = express.Router()

// Get posts
router.get('/', async (request: Request, response: Response) => {
    try {
        const posts = await Post.find().sort({ createdAt: -1 })
        response.status(200).json(posts)
    } catch (error) {
        response.status(500).json({ message: error })
    }
})

// Create post 
router.post('/', async(req:Request, res:Response)=> {
    try {
        const {title, content} = req.body

        if(!title || !content){
            return res.status(400).json({message: "Title and content are required"})
        }
        const post = await Post.create({title, content})
        res.status(201).json(post)
    } catch (error) {
        console.error("Error creating post:",error)
        res.status(500).json({message:"Error creating post"})
    }
})


export {router as postRoutes}