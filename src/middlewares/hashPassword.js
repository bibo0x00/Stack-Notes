import bcrypt from 'bcrypt'
const hashPassword = async (req, res, next) => {
    try {
        const { password } = req.body
        if (!password) {
            return res.status(400).json({
                success: false,
                message: "Password is required",
            })
        }
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        req.body.password = hashedPassword
        next()
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            error: err.message,
        })
    }
}   

export default hashPassword