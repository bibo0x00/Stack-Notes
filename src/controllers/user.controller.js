import { json } from "express";
import User from "../models/user.model.js";
import bcrypt from 'bcrypt'

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
            const {email , password } = req.body

            if(!email || !password){
                return res.status(400).json({
                    success : false , 
                    message : "Email and password are required"
                })
            }
            const user = await User.findOne({ email })
            if(!user){
                return res.status(404).json({
                    success : false , 
                    message : "User not found"
                })
            }
            const isMatch = await bcrypt.compare(password ,user.password)
            if(!isMatch){
                return res.status(401).json({
                    success : false , 
                    message : "Invalid credentials"
                })
            }
            user.password = undefined
            
            jwt.sign({ id : user._id } , process.env.JWT_SECRET  , (err , token) => { 
                if(err){
                    return res.status(500).json({
                        success : false , 
                        message : "Internal server error" , 
                        error : err.message
                    })

                }

                user.token = token
                  res.status(200).json({
                success : true , 
                message : "User signed in successfully" ,
                token : token
            })  
            }
            )
         

   }catch(err){
        res.status(500).json({
            success : false , 
            message : "Internal server error" , 
            error : err.message
        })
   }    
   





}


export {
     register  , 
        logIn

}