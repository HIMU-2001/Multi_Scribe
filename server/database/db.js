import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

const Connection = async() =>{
    const URL = process.env.URL;
    try{
        await mongoose.connect(URL)
        console.log("Database Connected");
    }catch(error){
        console.log("Error while connecting ",error);
    }
}

export default Connection;