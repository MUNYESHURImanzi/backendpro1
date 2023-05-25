import express from "express"
import bodyParser from "body-parser"
import signin from "../controllers/signin.js"



const router=express.Router()
router.use(bodyParser.json())


router.get("/signin",signin)


export default router