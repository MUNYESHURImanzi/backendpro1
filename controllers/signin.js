import SignUp from '../models/register.js';
import signIn from '../models/signin.js';
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"



const signInController = async (req, res) => {
  try {
    const data = req.body;
    const check = await SignUp.findOne({ email: data.email });
    const pass=data.password
    const email=data.email
    let user=bcrypt.compare(pass,check.password || email,check.email)
    let token= jwt.sign({id:user._id },"teckcode");
   
    if (check) {
    
      
      
       if(user==true) {
        res.send("it is true")
 
 
    

       }else{
        res.send("your password is wrong")
       }
      
       
      return res.status(409).json({
        message: "Welcome to home",
      });
    } else {
      let signInstance = new signIn({
        email: data.email,
        password: data.password,
      });

      user.token=token
      user.password=undefined
      const options={
       expire:new Date(Date()+ 3 * 24 *60 * 60 * 1000),
       httponly:true
      }

      res.status(200).cookie("token",token,options).json({
        message: true,
        token,
        user
      });
    }

  } catch (err) {
    console.log("Error caught:", err);
    res.status(500).json({
      message: "Failed to process the data",
      error: "Failed",
    });
  }
};

export default signInController;