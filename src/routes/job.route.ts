// job.routes.ts

import express from "express";
import {
  postJob,
  getJob,
  getJobs,
  removeJob,
} from "../controllers/jobController";

const router = express.Router();

router.post("/postJob", postJob);
router.get("/jobs/:id", getJob);
router.get("/jobs", getJobs);
router.delete("/jobs/:id", removeJob);

export default router;
