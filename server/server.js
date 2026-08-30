import express from 'express'

import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/db.js'
import routes from './Routes/UserRoutes.js'
import resumeRoute from './Routes/ResumeRoutes.js'

const app = express()

const PORT = process.env.PORT || 3000
app.use(express.json())
app.use(cors())

//database connection
await connectDB()

app.get('/',(req,res) =>{
    res.send("Server is live...")
})

app.use('/api/users',routes)
app.use('/api/resumes',resumeRoute)
app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})

