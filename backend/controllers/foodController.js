import foodModel from "../models/foodModel.js";
import fs from 'fs';

// add food Item

const addFood = async (req ,res) => {
    try {
    let image_filename =  `${req.file.filename}`
    const {foodname , description , price , category } = req.body

    const food = await foodModel.create({
        foodname,
        description,
        price,
        category,
        image :image_filename
    })

        res.json({sucess:true, message:"Food Added"})
    } catch (error) {
        console.log(error)
        res.json({sucess:false, message:"error"})  
    }
}

const foodList = async (req , res) => {
    try {
        let foods = await foodModel.find({})
        res.json({sucess:true , Data : foods})
    } catch (error) {
        console.log(error)
        res.json({sucess:false,message:"error"})
    }
}

const removeFood = async (req,res) => {
    try {
        const food = await foodModel.findById({_id : req.body.id});
        fs.unlink(`uploads/${food.image}`,()=>{})

        await foodModel.findOneAndDelete(req.body.id);
        res.json({sucess:true , message:"Food Removed"})

    } catch (error) {
        console.log(error)
        res.json({sucess:false,message:"error"})
    }
}

export {addFood , foodList ,removeFood}