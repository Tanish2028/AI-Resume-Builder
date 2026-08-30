
import User from '../models/User.js';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import Resume from '../models/Resume.js';
// post -> user registration /api/users/register

const getToken = (userId)=>{
  const token = jwt.sign({userId},process.env.JWT_SECRET,{expiresIn:'7d'})

  return token;
}

export const registerUser = async (req,res)=>{
  try {
    
    //get data from body
    const {name,email,password} = req.body;
    
    //check for required fields
    if(!name || !email || !password){
      return res.status(400).json({message:"Missing required fields.."})
    }
    //check if user already exists or not.

    const user = await User.findOne({email})

    if(!user){
      return res.status(400).json({message:"User already exists!"})

    }

    const hashedPassword = await bcrypt.hash(password,10);

    const newUser = await User.create({
      name,email,password:hashedPassword
    })

    const token = getToken(newUser._id)
    
    newUser.password = undefined

    return res.status(201).json({message:"User created successfully!",token,newUser})

  } catch (error) {
    return res.status(400).json({message:error.message})
  }
}


//user login => /api/user/login

export const loginUser = async (req,res) =>{

  try {
    
    const {email,password} = req.body

    if(!email || !password){
      return res.status(400).json({message:"Missing required fields.."})
    }

    const user = await User.findOne({email})

    if(!user){
      return res.status(400).json({message:"Use not exists!"})
    }

    if(!user.comparePassword(password)){
      return res.status(400).json({message:"Invalid password or email!!"})
    }
    
    const token = getToken(user._id)

    user.password = undefined

    return res.status(201).json({message:"User login successfully!",token,user})


  } catch (error) {
    return res.status(400).json({message:error.message})
  }
}


//get data of user through userId
//GET => /api/users/data

export const getUserData = async (req,res) =>{
  try {
    

    const userId = req.userId;

    const user = User.findById(userId);

    if(!user){
      return res.status(404).json({message:"User not found!"})
    }

    user.password = undefined

    return res.status(201).json({user})

  } catch (error) {
    return res.status(400).json({message:error.message})
  }
}


//get all the resume of the user
// GET : /api/users/resume

export const getResumeData = async (req,res) =>{
  try {
    
    const userId = req.userId

    const resume = await Resume.find({userId})

    if(!resume){
      return res.status(404).json({message:"No resume available"})
    }

    return res.status(201).json({message:"Resumes",resume})
  } catch (error) {
    return res.status(400).json({message:error.message})
  }
}