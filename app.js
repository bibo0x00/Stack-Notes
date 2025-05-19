import express from 'express'
import dbConnection from './src/config/dbConnection.js'
import userRouter from './src/routes/user.routes.js'
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use('/api/auth' , userRouter)
app.use('/api/auth' , userRouter)







app.listen(PORT, () => {    
    console.log(`Server is running on port ${PORT}`)
})
