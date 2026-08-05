import mongoose from "mongoose";
import "dotenv/config";

const uri = process.env.MONGO_URI;

if (!uri) {
    throw new Error("URI is not found in .env");
}
export const connectDB = async() => {
    try{
        await mongoose.connect(uri);
        console.log("DataBase is connected successfully");
    }
    catch(error){
        console.log(`${error}`);
        throw Error;
    }
}