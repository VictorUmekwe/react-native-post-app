import { Schema, model } from 'mongoose'

interface IPost {
    title: string
    content: string
}

const postSchema = new Schema<IPost>({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
}, { timestamps: true })

const Post = model<IPost>('Post', postSchema)

export default Post