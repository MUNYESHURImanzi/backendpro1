import express from "express"
import bodyParser from "body-parser"
import signin from "../controllers/signin.js"
import cookieParser from "cookie-parser"


const router=express.Router()
router.use(cookieParser())
router.use(bodyParser.json())


router.get("/signin",signin)


export default router