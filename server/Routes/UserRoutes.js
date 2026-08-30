import express from 'express'
import { getResumeData, getUserData, loginUser, registerUser } from '../Controller/UserController.js';
import protect from '../middlewares/authmiddleware.js';

const routes = express.Router();

routes.post('/register',registerUser)
routes.post('/login',loginUser)
routes.get('/data',protect,getUserData)
routes.get('/resume',protect,getResumeData)


export default routes