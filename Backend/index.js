import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bookRouter from "./Router/bookRouter.js";
import userRouter from "./Router/userRouter.js"
import cors from "cors"


dotenv.config();


const app = express();
app.use(express.json())
app.use(cors());

const PORT = process.env.PORT || 4004;
const URL = process.env.MONGODB_URL;
const connectToDB = async () => {
  try {
    await mongoose.connect(URL);

    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error connecting to the database:", error);
  }
};
connectToDB();

app.use("/book", bookRouter);
app.use("/user",userRouter)
app.get("/", (req, res) => {
  res.send("Welcome to the backend world");
});

app.listen(PORT, () => {
  console.log(`The server started on port ${PORT}`);
});
