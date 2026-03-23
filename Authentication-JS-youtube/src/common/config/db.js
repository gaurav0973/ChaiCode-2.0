import mongoose from "mongoose";

const connectDB = async()=> {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Db is connceted...")
}

export default connectDB