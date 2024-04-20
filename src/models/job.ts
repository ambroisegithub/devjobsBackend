import { initializePrisma } from '../models/prisma';

const prisma = initializePrisma();
// Use prisma as you normally would

export interface JobDocument {
  id?: number;
  company: string;
  logo: string;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
  website: string;
  apply: string;
  isAvailable: boolean;
  description: string;
  requirements: {
    content: string;
    items: string[];
  };
  jobAssistance: {
    content: string;
    items: string[];
  };
  role: {
    content: string;
    items: string[];
  };
}

export const createJob = async (data: JobDocument) => {
  return await prisma.job.create({ data });
};

export const findJobById = async (id: number) => {
  return await prisma.job.findUnique({ where: { id } });
};

export const findAllJobs = async () => {
  return await prisma.job.findMany({
    where: {
      isAvailable: true
    }
  });
};

export const deleteJob = async (id: number) => {
  await prisma.job.delete({ where: { id } });
};