"use client";
// This must be a Client Component because it uses React state,
// router navigation, form events, and fetch() in the browser.

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditForm({ task }: any) {
  const router = useRouter();
  // useRouter allows client-side navigation and refreshing after updating.

  const [title, setTitle] = useState(task.title);
  // useState stores and updates the title input as the user types.

  const [description, setDescription] = useState(task.description);
  // useState stores and updates the description input.
  async function handleSubmit(e: any) {
    e.preventDefault();
    // Prevents the page from reloading when the form is submitted.

    await fetch(`/api/tasks/${task._id}`, {
      method: "PUT",
      // Sends a PUT request to update the task in the API.

      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description }),
      // Sends the updated title and description to the backend.
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
          // Updates the title state as the user types.
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
