import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import 'dotenv/config'
import { postRoutes } from './routes/postRoute.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api/posts', postRoutes)
mongoose.connect(process.env.MONGO_URI || '').then(() => {
    console.log('Connected to MongoDB')
    app.listen(process.env.PORT || 3000, () => {
        console.log(`Server is running on port ${process.env.PORT || 3000}`)
    })
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error)
    process.exit(1)
})