import mongoose from "mongoose";
const register=new mongoose.Schema({

    names:{
        type:String,
        require:"pless addd your name"

    },
    email:{
        type:String,
        require:"pless addd your email"
        
    },
    password:{
        type:String,
        require:"pless addd your password"
        
    }

})

export default mongoose.model("user",register)