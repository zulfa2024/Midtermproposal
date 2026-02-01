"use client";

import { useRouter } from "next/navigation";

export default function DeleteButton({ id }: any) {
  const router = useRouter();

  async function handleDelete() {
    await fetch(`/api/tasks/${id}`, {
      method: "DELETE",
    });

    router.push("/");
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
