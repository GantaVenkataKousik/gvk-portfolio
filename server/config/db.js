import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();


const connectDB = async() => {
    try{
        const conn = await mongoose.connect(process.env.DB_URL);
        console.log(`Connected to MongoDB Successfully ${conn.connection.host} `.bgGreen.white);
    }
    catch(err){
        console.log(`Error connecting to MongoDB`.bgWhite.re);
    }
}

export default connectDB;