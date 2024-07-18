import mongoose from "mongoose";

export const connectDb = async () => {
    await mongoose.connect("mongodb+srv://vishu001:Vishal1234@cluster0.hheunos.mongodb.net/food-del").then(() => console.log("DB is Connected "))
}
