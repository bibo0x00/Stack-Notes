import express from 'express'
import { createNote, getAllNotes  ,getNote , deleteNote , updateNote} from '../controllers/note.controller.js'
const notesRouter = express.Router()


notesRouter.post('/createNote',createNote)
notesRouter.get('/getNote',getNote)
notesRouter.delete('/deleteNote/:id',deleteNote)
notesRouter.put('/updateNote/:id',updateNote)
notesRouter.get('/getAllNotes',getAllNotes)



export default notesRouter