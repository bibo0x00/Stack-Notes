import mongoose from "mongoose"


const dbConnection = mongoose.connect('mongodb://127.0.0.1:27017/stacknote2')
.then(()=>{
    console.log(`Database Connected`);
    
}).catch((err)=>{
    console.error( `Connection Fialed` , err)
})

export default dbConnection