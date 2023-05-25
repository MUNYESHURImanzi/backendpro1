import mongoose, { Schema } from "mongoose"

const commentSchema = new mongoose.Schema({
    email: {
        type: String,
        required: "email is required"
    },
    comment: {
        type: String,
        required: "comment is required"
    },
    articleId:{
        type: String,
        required: "id is required"
    }
})

export default mongoose.model("comments", commentSchema)