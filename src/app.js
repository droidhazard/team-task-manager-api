import express from "express";
import mongoose, { connect } from "mongoose";
import { connectDB } from "./db/index.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(`^^^ FAILED TO START SERVER, `, error);
  });
