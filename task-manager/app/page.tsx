import { connectDB } from "@/lib/mongodb";
import Task from "@/models/Task";
import Link from "next/link";

export const dynamic = "force-dynamic"; 
// This forces the page to always fetch fresh data on every request.
// Without this, Next.js might cache the task list and not show updates immediately.

export default async function Home() {
  await connectDB();
  // Ensure database connection before running queries.
  const tasks = JSON.parse(JSON.stringify(await Task.find().lean()));

  return (
    <div className="max-w-2xl mx-auto p-8 space-y-6">
      <h1 className="text-3xl font-bold text-center">Task List</h1>

      <div className="text-center">
        <Link
          href="/tasks/new"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Create New Task
        </Link>
      </div>

      <div className="space-y-3">
        {tasks.map((task: any) => (
          <Link
            key={task._id}
            href={`/tasks/${task._id}`}
            className="block p-4 border rounded hover:bg-gray-50"
          >
            <h2 className="text-xl font-semibold">{task.title}</h2>
            <p className="text-gray-600">{task.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
