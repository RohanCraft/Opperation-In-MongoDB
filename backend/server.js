import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import StudentRoutes from "./routes/studentRoutes.js";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    mathods: ["GET", "POST"],
    credentials: true,
  })
);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("connetced to DB"))
  .catch((err) => console.error("Error while connecting to DB:", err));

  const db = mongoose.connection;
  db.on("error", (err) => console.error("Error while connecting to DB:", err));
  db.once("open", () => console.log("Rechecking.... Connected to DB"));

app.get("/", (req, res) => {
  res.send("Welcome to the student data API");
});

app.use("/students", StudentRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
