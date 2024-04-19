// job.controller.ts

import { Request, Response } from "express";
import { prisma } from "../server";
const createJob = async (req: Request, res: Response) => {
  try {
    const {
      company,
      logo,
      position,
      contract,
      location,
      website,
      isAvailable,
      apply,
      description,
      requirements,
      role,
    } = req.body;
    const newJob = await prisma.job.create({
      data: {
        company,
        logo,
        position,
        contract,
        location,
        website,
        isAvailable,
        apply,
        description,
        requirements,
        role,
      },
    });
    res.status(200).json(newJob);
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

const getAllJobs = async (req: Request, res: Response) => {
  try {
    const jobs = await prisma.job.findMany();
    res.status(200).json(jobs);
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

const getJobById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const job = await prisma.job.findUnique({
      where: {
        id: Number(id),
      },
    });
    res.status(200).json(job);
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

const updateJobById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const {
      company,
      logo,
      position,
      contract,
      location,
      website,
      isAvailable,
      apply,
      description,
      requirements,
      role,
    } = req.body;
    const updatedJob = await prisma.job.update({
      where: {
        id: Number(id),
      },
      data: {
        company,
        logo,
        position,
        contract,
        location,
        website,
        isAvailable,
        apply,
        description,
        requirements,
        role,
      },
    });
    res.status(200).json(updatedJob);
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

const deleteJobById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedJob = await prisma.job.delete({
      where: {
        id: Number(id),
      },
    });
    res.status(200).json(deletedJob);
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

export default {
  createJob,
  getAllJobs,
  getJobById,
  updateJobById,
  deleteJobById,
};
