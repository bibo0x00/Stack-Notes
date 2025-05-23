import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name : {
        type : String , 
        required : true

    } , 
    email : {
        type : String , 
        required : true , 
        unique : true
    } , 
    password : {
        type : String , 
        required : true
    } ,
    confirmEmail : {
        type : Boolean , 
        default : false

    } ,
    role :{
        type : String , 
        enum : ['user' , 'admin'] , 
        default : 'user'
    } , 

    createdAt : {
        type : Date , 
        default : Date.now
    } ,
    updatedAt : {
        type : Date , 
        default : Date.now
    }  


}  , {
    timestamps : true
})

const User = mongoose.model('User' , userSchema)
export default User
