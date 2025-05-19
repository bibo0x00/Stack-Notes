import User from "../models/user.model.js";

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

const signin = async (req , res) => {
    res.send("signin")
}
export {
     register  , 
        signin

}