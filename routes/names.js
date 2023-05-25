import express from "express"
import bodyParser from "body-parser"
import { createArticle, deleteArticle, readArticle, updateArticle ,moreArticle} from "../controllers/articles.js"
import {createUsers,readUsers} from "../controllers/users.js"
import {readComments,createComments} from "../controllers/comments.js"
import { updateNames,deleteNames,createNames } from "../controllers/names.js"

const router=express.Router()
router.use(bodyParser.json())

router.post("/save",createArticle)
router.get("/read/:searchName",readArticle)
router.patch("/",updateArticle)
router.get("/more",moreArticle)
router.delete("/",deleteArticle)


router.post("/users",createUsers)
router.get("/users",readUsers)

router.post("/comments",createComments)
router.get("/comments",readComments)

router.post("/names/:myName",createNames)
router.put("/names/:myNbr",updateNames)
router.delete("/names/one",deleteNames)


export default router