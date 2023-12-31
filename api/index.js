import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
dotenv.config();

const app = express();

mongoose
  .connect(process.env.Mongo_URL)
  .then(() => {
    console.log("Database Connected Successfully.");
  })
  .catch((err) => {
    console.log(err);
  });
app.use(express.json());

app.listen(3000, () => {
  console.log("listening on 3000...!");
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
