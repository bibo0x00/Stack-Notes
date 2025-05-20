import express from 'express'
import { createNote, getAllNotes  ,getNote , deleteNote , updateNote} from '../controllers/note.controller.js'
import verifyToken from '../middlewares/verifyToken.js'
const notesRouter = express.Router()


notesRouter.post('/createNote', verifyToken, createNote)
notesRouter.get('/getNote',verifyToken ,getNote)
notesRouter.delete('/deleteNote/:id',verifyToken,deleteNote)
notesRouter.put('/updateNote/:id',verifyToken,updateNote)
notesRouter.get('/getAllNotes',verifyToken,getAllNotes)



export default notesRouter