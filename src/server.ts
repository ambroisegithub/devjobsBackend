import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import PostRouter from "./routes/post.route";
import jobRoute from "./routes/job.route";

export const prisma = new PrismaClient();

const app = express();
const port = 8080;

async function main() {
  app.use(express.json());

  // Register API routes
  app.use("/api/v1/post", PostRouter);
  app.use("/api/v1/job", jobRoute);

  // Catch unregistered routes
  app.all("*", (req: Request, res: Response) => {
    res.status(404).json({ error: `Route ${req.originalUrl} not found` });
  });

  // Listen to port
  const server = app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });

  // Connect to database
  try {
    await prisma.$connect();
    console.log("Database connected successfully.");
  } catch (e) {
    console.error("Error connecting to database:", e);
    await prisma.$disconnect();
    server.close();
    process.exit(1);
  }
}

main();


