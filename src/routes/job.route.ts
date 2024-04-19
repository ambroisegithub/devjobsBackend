// job.routes.ts

import express from "express";
import JobController from "../controllers/jobController";

const router = express.Router();

router.post("/create", JobController.createJob);
router.get("/getall", JobController.getAllJobs);
router.get("/get/:id", JobController.getJobById);
router.put("/update/:id", JobController.updateJobById);
router.delete("/delete/:id", JobController.deleteJobById);

export default router;
