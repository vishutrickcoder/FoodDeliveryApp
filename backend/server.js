import express from 'express'
import cors from 'cors'
import { connectDb } from './config/db.js'
import foodRouter from './routes/foodRoute.js'

import dotenv from "dotenv";

dotenv.config()
// App Config
const app = express()
const port = 4000

// middleware
app.use(express.json())
app.use(cors())

// db connection
connectDb()

// Api endPoint 
app.use("/api/food",foodRouter)
app.use("/images", express.static('uploads'))
app.get('/',(req ,res) => {
    res.send("Api is Working ")
})

app.listen(port , () => {
    console.log(`Server is Running in  http://localhost:${port}`)
})


// mongodb+srv://vishu001:Vishal#1234@cluster0.hheunos.mongodb.net/?