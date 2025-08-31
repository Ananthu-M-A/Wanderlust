import mongoose from "mongoose";

export const connectDb = async () => {
    try {
        if (mongoose.connection.readyState === 0) {
            await mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string, {
                serverSelectionTimeoutMS: 10000,
            });
            console.log("Database is connected");
        }
    } catch (error) {
        console.error("Error connecting to Database:", error);
        process.exit(1);
    }
}