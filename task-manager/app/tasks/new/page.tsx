"use client";
import { useState } from "react"; // - useState to manage form inputs.
import { useRouter } from "next/navigation"; // - useRouter for client-side navigation

export default function NewTaskPage() {
  const router = useRouter();
  // useRouter allows redirecting the user after creating a task.
  const [title, setTitle] = useState("");
  // useState stores the title input as the user types.
  const [description, setDescription] = useState("");
  // useState stores the description input.
  async function handleSubmit(e: any) {
    e.preventDefault();

    const res = await fetch("/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description }),
    });

    if (res.ok) {
      router.push("/");
    }
  }

  return (
    <div className="max-w-xl mx-auto p-8 space-y-6">
      <h1 className="text-3xl font-bold">Create New Task</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Title</label>
          <input
            className="w-full border px-3 py-2 rounded"
            placeholder="Task title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Description</label>
          <textarea
            className="w-full border px-3 py-2 rounded"
            placeholder="Task description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <button
          type="submit"
         className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors duration-200"
        >
          Save Task
        </button>
      </form>
    </div>
  );
}
