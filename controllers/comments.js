import Comments from "../models/comments.js";
const addingComments =(req,res)=>{

    try{
        const data=req.body;
     const id=req.params.id
        let commentInstance=new Comments({
            email:data.email,
            comment:data.comment,
            articleId:id
           

        });

   
    commentInstance.save()
   . then((data)=>{
        res.status(200).json({
             message:"data saved successfully",
             error:null,
            data:data
         
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
export default addingComments