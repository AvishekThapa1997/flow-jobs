import { getApprovedJobs } from '@src/features/jobs/service';

export default async function Home() {
  const jobs = await getApprovedJobs();
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      {JSON.stringify(jobs)}
    </main>
  );
}
