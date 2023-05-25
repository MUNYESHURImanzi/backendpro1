import signup from "../models/register.js";
const register =async(req,res)=>{

    try{
        const data=req.body;
        const check=await signup.findOne({email:data.email})
        if(check){
           
            return res.status(409).json({
                message:"user already in our database"
            })
        }

  else{  
        let registerInstance=new signup({
            email:data.email,
            password:data.password
          
           

        });
       
 
   let result = await registerInstance.save()
  
        res.status(200).json({
             message:"data saved successfully",
             error:null,
            data:result
         
        })
  


    }}
    catch(err){
  console.log("error catched")
  res.status(500).json({
    message:"failed to save the data",
    error:"failed"
})

    
    }
 
}
export default register