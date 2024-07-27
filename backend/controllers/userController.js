import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken'
import bcrypt from "bcrypt"
import validator from 'validator'

// Login User 

const loginUser = async (req, res) => {
    const {email , password} = req.body;
    try {
        const user = await userModel.findOne({email})
        if(!user){
            return res.json({success:false , message:"First make an account .."})
        }

        const comparePassword = await bcrypt.compare(password , user.password)
        if(!comparePassword){
            return res.json({success:false , message:"Invalid Credencials"})
        }

        const token = createToken(user._id)
        res.json({success:true , token})
    } catch (error) {
        console.log(error)
        res.json({success:false , message:"Something went wrong"})  

    }
}

const createToken = (id) => {
    return jwt.sign({id} , process.env.JWT_SECRET)
}

// Register User 

const registerUser = async (req, res) => {
    const { name, password, email } = req.body

    try {
        const ExistUser = await userModel.findOne({email})
        if(ExistUser){
            return res.json({success:false , message:"User Already exist"})
        }

        if(!validator.isEmail(email)){
            return res.json({success:false , message:"Please Enter Valid email .."})
        }

        if(password.length < 8){
            return res.json({success:false , message:"Please Enter Strong Password .."})  
        }

        // Hashing User Password 
        const salt = await bcrypt.genSalt(10)
        const hashedPass = await bcrypt.hash(password , salt)

        const newUser = new userModel({
            name ,
            email,
            password:hashedPass
        })

        const user = await newUser.save()
        const token = createToken(user._id)
        res.json({success:true , token})
    } catch (error) {
        console.log(error)
        res.json({success:false , message:"Error"})  

    }
}

export { loginUser, registerUser }