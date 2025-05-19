import express from 'express'
import {register , signin } from '../controllers/user.controller.js' 
import chickEmailExists from '../middlewares/chickEmailExists.js'
const userRouter = express.Router()





userRouter.post('/register', chickEmailExists , register)
userRouter.post('/signin' , signin)


export default userRouter