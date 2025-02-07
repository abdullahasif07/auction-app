import mongoose from "mongoose"

export const connect = async ()=>{
    try {
        console.log("connecting to database...");
        console.log(process.env.MONGO_URI)
        const data = await mongoose.connect(process.env.MONGO_URI);
        console.log("Database connected successfully");
    }
    catch(error)
    {
        console.log("error connecting to database: ", error);
    }
}