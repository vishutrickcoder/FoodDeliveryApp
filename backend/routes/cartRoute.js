import express from 'express'
import {addToCart , removeFromCart , getCart} from '../controllers/cartController.js'
import authMiddleware from '../middleware/auth.js'
const cartRoute = express.Router()

cartRoute.post('/get', authMiddleware,getCart)
cartRoute.post('/add' ,authMiddleware, addToCart)
cartRoute.post('/remove' , authMiddleware,removeFromCart)

export default cartRoute;