import express from 'express'
import dbConnection from './src/config/dbConnection.js'
import userRouter from './src/routes/user.routes.js'
import notesRouter from './src/routes/note.routes.js'
import User from './src/models/user.model.js'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
const app = express()
dotenv.config()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.use('/api/auth' , userRouter)
app.use('/api/notes' , notesRouter)





app.listen(PORT, () => {    
    console.log(`Server is running on port ${PORT}`)
})
