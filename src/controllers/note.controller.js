import Note from '../models/note.model.js';

const createNote = async (req, res) => {
    try{
        const {title , content , userId} = req.body
        if(!title || !content || !userId){
            return res.status(400).json({
                success : false , 
                message : "Title , content and userId are required"
            })
        }
        const note = await Note.insertMany({
            title , 
            content , 
            userId
        })
        res.status(201).json({
            success : true , 
            message : "Note created successfully" , 
            data : note
        })

    }catch(err){
        res.status(500).json({
            success : false , 
            message : "Internal server error" , 
            error : err.message
        })
    }   





}

const getAllNotes = async (req, res) => {
    try{
        const notes = Note.find()
        res.status(200).json({
            success : true  , 
            message : "It`s all notes" , 
            data : notes
        })

    }catch(err){
        res.status(500).json({
            success : false , 
            message : "Internal server error" , 
            error : err.message
        })
    }}


const getNote = async (req , res)=>{
     try{
    const note = await Note.find({ id: req.user._id })
    res.status(200).json({
        success : true , 
        message : "Note found" , 
        data : note
    })
     }catch(err){
        res.status(500).json({
            success : false , 
            message : "Internal server error" , 
            error : err.message
        })
     }  
    }



const deleteNote = async (req , res)=>{
    try{
        const note = await Note.findByIdAndDelete(req.params.id)
        res.status(200).json({
            success : true , 
            message : "Note deleted" , 
            data : note
        })
    }catch(err){
        res.status(500).json({
            success : false , 
            message : "Internal server error" , 
            error : err.message
        })
    }
}

const updateNote = async (req , res)=>{
    try{
        const note = await Note.findByIdAndUpdate(req.params.id , req.body , { new : true })
        res.status(200).json({
            success : true , 
            message : "Note updated" , 
            data : note
        })  
    }
    catch(err){
        res.status(500).json({
            success : false , 
            message : "Internal server error" , 
            error : err.message
        })
    }  }
         

export {
    getAllNotes , 
    createNote  , 
    getNote , 
     deleteNote ,
    updateNote
    
}
