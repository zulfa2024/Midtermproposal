import { connectDB } from "@/lib/mongodb";
import Task from "@/models/Task"; // Task model: lets us read a single task from the database.
import Link from "next/link"; // Link: used for client-side navigation between pages.
import EditForm from "./EditForm";
import DeleteButton from "./DeleteButton";

export default async function TaskPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  await connectDB(); // Ensures we have a connection to MongoDB before trying to read data.

  const { id } = await params; // Extract the task ID from the dynamic route /tasks/[id].

  const task = JSON.parse(JSON.stringify(await Task.findById(id).lean()));

  if (!task) {
    return (
      <div className="max-w-xl mx-auto p-8">
        <h1 className="text-xl font-bold">Task not found</h1>
        <Link href="/" className="text-blue-600 underline">
          Go back
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto p-8 space-y-10">
      {/*  VIEW SECTION */}
      <div className="space-y-3 border-b pb-6">
        <h1 className="text-3xl font-bold">Task Details</h1>

        <div className="space-y-1">
          <p className="text-lg">
            <span className="font-semibold">Title:</span> {task.title}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Description:</span>{" "}
            {task.description || "No description"}
          </p>
        </div>
      </div>

      {/*  EDIT SECTION */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Edit Task</h2>
        <EditForm task={task} />
      </div>

      {/*  DELETE SECTION */}
      <div>
        <DeleteButton id={id} />
      </div>

      <Link href="/" className="text-blue-600 underline block mt-4">
        Back to Task List
      </Link>
    </div>
  );
}
