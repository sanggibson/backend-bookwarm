import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    // Connect to the database
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("error connecting to db", error);
    process.exit(1);
  }
};
