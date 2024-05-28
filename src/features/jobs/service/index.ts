import { prisma } from '@src/lib/db';

export function getApprovedJobs() {
  return prisma.job.findMany({
    where: {
      approved: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
}
