import { query } from "express";
import ArticleModel from "../models/articles.js"
import Comments from "../models/comments.js"
const createArticle=(req,res)=>{
    try{
        const data=req.body;
        const comment=req.params.comment
        let articleInstance=new ArticleModel({
            title:data.title,
            content:data.content,
            author:req.body.author || "elvis mugisha",
            image:req.body.image,
            

        });

    console.log([comment,data])
    articleInstance.save()
   . then((data)=>{
        res.status(200).json({
             message:"data saved successfully",
             error:null,
            data:data,
            comment:comment
        })
    })
   
    }
    catch(err){
  console.log("error catched")
  res.status(500).json({
    message:"failed to save the data",
    error:"failed"
})

    }
   
}
const readArticleLimit =async(req,res)=>{
    try{
    const page=req.query.page
    const range=req.query.limit

    let limitation=range * page //10*2=20
    let start=limitation-range //20-10=10

    let result=await ArticleModel.find({}).skip(start).limit(range)
    if(result.length==0){
        res.status(400).json({
          
        message:"data fetched successfuly",
        error:"not found ",
        data:result
        })
   
}
else{
    res.status(200).json({
        data:result,
        message:"data fetched successfuly",
        error:null
    })
}
}
catch(err){
    res.status(500).json({
        data:null,
        message:"failed to read the articles specified",
        error:"internal error server"
    })
}

}
const readArticle=async(req,res)=>{
    try{
    const blogId=req.params.reqId;
    const query={_id:blogId}
    const data=await ArticleModel.find(query)
    if(data.length==0){
        res.status(404).json({
            error:"no data found",
            data:data
         } )
    }
    else{
    res.status(200).json({
        message:"data fetched successfuly",
        error:null,
        data:data
    })}
}
    

   catch(err){
    res.status(500).json({
        message:"failed",
        err:"internal error server"

    })
   }
}
const updateArticle= async(req,res)=>{
    const articleId=req.params.articleId
    const updates=req.body
    let found =await ArticleModel.find({_id:articleId})
    if(found.length==0){
        res.status(404).json({
            message:"article trying to update is not available",
            error:"article not found"
        })
    }
    else{
        let result=await ArticleModel.findOneAndUpdate(
            {_id:articleId},
            {$set:updates}
        )
        res.status(200).json({
        message:"data updated successfuly",
        error:"mull",
        data:result
        })
    }
}
const moreArticle=(req,res)=>{
    const start=req.query.start
    const end=req.query.end
    const color=req.query.color
   
    console.log(color)
    console.log("this is more an article controller")
    res.send(req.query)
}
const deleteArticle=async(req,res)=>{
const articleId=req.params.articleId
let found=await ArticleModel.find({_id:articleId})
if (found.length==0){
    res.status(404).json({
        message:"trying to deleete is not found",
        error:"article not found",
        data:null
    })
}
else{
    let result= await ArticleModel.deleteOne({_id:articleId})
    res.status(200).json({
        message:"message deleted successfully",
        error:null,
        data:result
    })
}

}

const addingComments =(req,res)=>{

    try{
        const data=req.body;
        const comment=req.params.comment
        let commentInstance=new Comments({
            email:data.email,
            comment:req.query.id
           

        });

    console.log([comment,data])
    commentInstance.save()
   . then((data)=>{
        res.status(200).json({
             message:"data saved successfully",
             error:null,
            data:data,
            comment:comment
        })
    })
   
    }
    catch(err){
  console.log("error catched")
  res.status(500).json({
    message:"failed to save the data",
    error:"failed"
})

    }
   
 
}
export {createArticle,readArticle,updateArticle,deleteArticle,moreArticle,addingComments,readArticleLimit}