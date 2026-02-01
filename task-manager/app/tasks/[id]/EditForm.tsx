"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditForm({ task }: any) {
  const router = useRouter();
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  async function handleSubmit(e: any) {
    e.preventDefault();

    await fetch(`/api/tasks/${task._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description }),
    });

    router.refresh(); // refresh the homepage data
    router.push("/"); // navigate back home
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block font-medium mb-1">Title</label>
        <input
          className="w-full border px-3 py-2 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Description</label>
        <textarea
          className="w-full border px-3 py-2 rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
        Update Task
      </button>
    </form>
  );
}
