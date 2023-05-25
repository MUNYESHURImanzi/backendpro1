import express from "express";
import cors from "cors"
import Welcome from "./controllers/welcome.js";
import articles from "./routes/articles.js"
import users from "./routes/articles.js"
import comments from "./routes/comments.js"
import names from"./routes/articles.js"
import mongoose from "mongoose";
import signup from './routes/register.js'
import signin from './routes/signin.js'
import readArticleLimit  from "./routes/articles.js";


const app=express();
app.use(cors())




app.get("/api/v1",Welcome)

app.use("/api/v1/articles", articles)
app.use("/api/v1/",users)
app.use("/api/v1/",comments)
app.use("/api/v1/",names)
app.use("/api/v1",signup)
app.use("/api/v1",signin)
app.use("/api/v1",readArticleLimit)


const connectTomongoDb=()=>{
    mongoose.connect("mongodb+srv://munyeshurimanzi:Munyeshuri1@cluster0.yqd0pr4.mongodb.net/?retryWrites=true&w=majority")

    .then(()=>{
        console.log("mongodb connected")
    })
    .catch((err)=>{
        console.error("failed to connect to mongodb",err);
    })
}

const port=5300;
app.listen(port,()=>{
    console.log("your server has been started "+port);
    connectTomongoDb()
})
