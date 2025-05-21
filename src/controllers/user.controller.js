import User from "../models/user.model.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


const register = async (req  , res) =>{
    try{
        let user = await User.insertMany(req.body)
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


export {
     register  , 
        logIn

}