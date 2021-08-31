import express, { Request, Response } from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import { jobsRouter } from "./routers/jobsRouter";
const main = async () => {
  const app = express();
  app.use(cors());
  app.use(express.json());
  dotenv.config();
  const PORT = process.env.PORT;
  app.get("/", (req: Request, res: Response): void => {
    res.json({ message: "Hallo Orenda" });
  });
  app.use("/api/jobs", jobsRouter);
  app.listen(PORT, (): void => {
    console.log(`"Server is Running on Port ${PORT}`);
  });
};
main().catch((err) => {
  console.log(err);
});
