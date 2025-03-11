import express, { Request, Response, Router } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { AppDataSource } from "./config/database";
import taskRouter from "./routes/task.route";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api/v1/task",taskRouter)

AppDataSource.initialize()
  .then(() => {
    console.log("📌 Database Connected");

    app.get("/", async (req, res) => {
      res.send("hello task management system ");
      
    });


    app.listen(3000, () => {
      console.log(`🚀 Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => console.log("❌ Database connection failed:", error));