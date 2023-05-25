import express from "express"
import bodyParser from "body-parser"
import { createArticle, deleteArticle, readArticle, updateArticle ,moreArticle, addingComments,readArticleLimit} from "../controllers/articles.js"
import {createUsers,readUsers} from "../controllers/users.js"

import { updateNames,deleteNames,createNames } from "../controllers/names.js"

const router=express.Router()
router.use(bodyParser.json())


router.post("/save",createArticle)
router.get("/save/:comment",createArticle)
router.get("/read/:reqId",readArticle)
router.patch("/update/:articleId",updateArticle)
router.get("/more",moreArticle)
router.delete("/delete/:articleId",deleteArticle)
router.get("/limit",readArticleLimit)


router.post("/users",createUsers)
router.get("/users",readUsers)


router.post("/names/:myName",createNames)
router.put("/names/:myNbr",updateNames)
router.delete("/names/one",deleteNames)


export default router