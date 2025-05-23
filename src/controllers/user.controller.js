import User from "../models/user.model.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { sendEmail } from "../services/email.service.js";


const register = async (req  , res) =>{
    try{
        let user = await User.insertMany(req.body)
        sendEmail(req.body.email)
        user[0].password = undefined
        res.status(201).json({
            success : true , 
            message : "User created successfully" , 
            data : user
        })  
      

    }catch(err){

        res.status(500).json({
            success : false , 
            message : "Internal server error" , 
            error : err.message
        })
    }   
}


const logIn = async (req , res)=>{

   try{
         
        let user = await User.findOne({email : req.body.email  })
        if (!user || !bcrypt.compareSync(req.body.password , user.password)){
            return res.status(401).json({success : false , message : "Invalid email or password"})}
        user.password = undefined
        let payload = {
            userId : user._id , 
            email : user.email , 
            role : user.role
        }
        jwt.sign(payload , process.env.JWT_SECRET , {expiresIn : '1d'} , (err , token)=>{
            if(err){
                return res.status(500).json({success : false , message : "Internal server error" , error : err.message}) }
            // user.token = token
            res.status(200).json({success : true ,  message : "User logged in successfully" , token : token })
        })
         

   }catch(err){
        res.status(500).json({success : false , message : "Internal server error" , error : err.message})    }    
   

}


const verifyEmail = async (req , res)=>{
jwt.verify(req.params.token , process.env.JWT_SECRET , async (err , decoded)=>{
    if(err) return res.status(401).json({success : false , message : "Invalid token"})
    let user = await User.findOneAndUpdate({email : decoded.email} , {confirmEmail : true} )
    res.status(200).json({success : true , message : "Email verified successfully" })
})







}


export {
     register  , 
        logIn , 
  verifyEmail 

}