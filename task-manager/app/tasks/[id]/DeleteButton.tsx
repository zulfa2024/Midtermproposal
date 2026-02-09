"use client";
// This must be a Client Component because it uses:
// - useRouter() (a client-side hook)
// - onClick event handling
// - fetch() triggered from the browser
// - router.refresh() and router.push() for navigation after deleting

import { useRouter } from "next/navigation";

export default function DeleteButton({ id }: any) {
  const router = useRouter();

  async function handleDelete() {
    await fetch(`/api/tasks/${id}`, {
      method: "DELETE",
    });

    router.refresh(); // refresh the task list
    router.push("/"); // navigate back home
  }

  return (
    <button
      onClick={handleDelete}
      className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
    >
      Delete Task
    </button>
  );
}
