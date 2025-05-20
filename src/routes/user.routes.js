import express from 'express'
import {logIn, register  } from '../controllers/user.controller.js' 
import chickEmailExists from '../middlewares/chickEmailExists.js'
import hashPassword from '../middlewares/hashPassword.js'
const userRouter = express.Router()





userRouter.post('/register', chickEmailExists , hashPassword,register)
userRouter.post('/login' , logIn)


export default userRouter