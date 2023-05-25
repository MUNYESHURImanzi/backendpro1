import express from "express";
import cors from "cors"
import mongoose from "mongoose";
import registration from "./routes/registration.js"

const app=express();
app.use(cors())






app.use("/signu", registration)


  
const  conecttomongo=(()=>{
  mongoose.connect("mongodb+srv://munyeshurimanzi:Munyeshuri1@cluster0.yqd0pr4.mongodb.net/?retryWrites=true&w=majority")
  .then(()=>{
    console.log("database connected sussefull");
  }).catch(()=>{
    console.log("database not conneted");
  })

})


const port=3010;
app.listen(port,()=>{
    console.log("your server has been started "+port);
    conecttomongo()
})
