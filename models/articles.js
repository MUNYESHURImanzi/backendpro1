import mongoose, { Schema } from "mongoose"

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: "title is required"
    },
    content: {
        type: String,
        required: "content is required"
    },
    author: {
        type: String

    },
    image: {
        type: String

    }
})

export default mongoose.model("articles", articleSchema)