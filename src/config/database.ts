import mongoose from "mongoose";
import { config } from "./env.ts";
import { log } from "console";

export const connectToDatabase = async (): Promise<void> => {
  try {
    console.log(config.mongoUri, "url................");

    await mongoose.connect(config.mongoUri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
};
