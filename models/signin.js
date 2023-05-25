import mongoose, { Schema } from "mongoose"

const signInSchema = new mongoose.Schema({
    email: {
        type: String,
        required: "email is required"
    },
    password: {
        type: String,
        required: "password is required"
    }
})

export default mongoose.model("signIn", signInSchema)