import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_CONNECTION_URI}/${process.env.DATABASE_NAME}`
    );
    console.log(
      `MongoDB Connected Successfully... DB Host: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log(`^^^MONGODB CONNECTION FAILED...`, error);
    process.exit(1);
  }
};

export { connectDB };
