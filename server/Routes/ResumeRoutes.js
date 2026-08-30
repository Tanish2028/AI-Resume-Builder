import express from 'express'
import protect from '../middlewares/authmiddleware.js';
import { createResume, deleteResume, getPublicResumeById, getResumeById, updateResume } from '../Controller/ResumeController.js';
import upload from '../config/multer.js';

const resumeRoute = express.Router();

resumeRoute.post('/create',protect,createResume)
resumeRoute.put('/update',upload.single('image'),protect,updateResume)
resumeRoute.delete('/delete/:resumeId',protect,deleteResume)
resumeRoute.get('/get/:resumeId',protect,getResumeById)
resumeRoute.get('/public/:resumeId',getPublicResumeById)

export default resumeRoute