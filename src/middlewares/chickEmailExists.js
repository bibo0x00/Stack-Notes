import User from "../models/user.model.js"

const chickEmailExists = async (req, res, next) => {
    try {
        const { email } = req.body
        const user = await User.findOne({ email })  
        if(user){

            return res.status(400).json({
                success: false,
                message: "Email already exists",
            })      

        }   
        next()
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            error: err.message,
        })
    }   
}
export default chickEmailExists
