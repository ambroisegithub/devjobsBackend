import { Request, Response } from "express";
import {
  createJob,
  findJobById,
  findAllJobs,
  deleteJob,
  JobDocument,
} from "../models/job";

export const postJob = async (req: Request, res: Response) => {
  const job: JobDocument = req.body;

  const newJob = await createJob(job);
  res.status(201).json(newJob);
};

export const getJob = async (req: Request, res: Response) => {
  const { id } = req.params;
  const jobId = Number(id);

  if (isNaN(jobId)) {
    res.status(400).json({ error: "Invalid job ID" });
    return;
  }

  const job = await findJobById(jobId);
  if (!job) {
    res.status(404).json({ error: "Job not found" });
    return;
  }

  res.json(job);
};
export const getJobs = async (req: Request, res: Response) => {
  const jobs = await findAllJobs();
  res.json(jobs);
};

export const removeJob = async (req: Request, res: Response) => {
  const { id } = req.params;
  await deleteJob(Number(id));
  res.json({ message: "Job deleted successfully" });
};
