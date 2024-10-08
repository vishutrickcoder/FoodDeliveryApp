import express from 'express'
import cors from 'cors'
import { connectDb } from './config/db.js'
import foodRouter from './routes/foodRoute.js'

import dotenv from "dotenv";
import userRouter from './routes/userRoute.js';
import cartRoute from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';

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
app.use("/api/user", userRouter)
app.use("/api/cart", cartRoute)
app.get('/',(req ,res) => {
    res.send("Api is Working ")
})
app.use("/api/order", orderRouter)
app.listen(port , () => {
    console.log(`Server is Running in  http://localhost:${port}`)
})
